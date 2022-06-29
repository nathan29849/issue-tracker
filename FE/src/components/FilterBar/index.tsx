import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './style';

import I from '@components/Icons';
import Popup from '@components/Popup';
import Contents from '@components/Popup/Contents';
import { IPopupData } from '@components/Popup/type';
import {
  searchDebounceDelay,
  limitedLengthSearchValue,
} from '@constants/default';
import useComponentVisible from '@hooks/useComponentVisible';
import useDebounce from '@hooks/useDebouce';
import { useSearch } from '@hooks/useSearch';

export default function FilterBar() {
  const location = useLocation();
  const issueFilterData = {
    info: [
      { status: 'is:open', name: '열린이슈' },
      { status: 'mine', name: '내가작성한이슈' },
      { status: 'assignedToMe', name: '나에게할당된이슈' },
      { status: 'comment', name: '내가댓글을남긴이슈' },
      { status: 'is:close', name: '닫힌이슈' },
    ],
  };

  const [searchValue, setSearchValue] = useState('is:open');
  const [isValidSearch, setIsValidSearch] = useState(true);
  const debouncedValue = useDebounce(searchValue, searchDebounceDelay);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const { init, replace } = useSearch('q', 'is:open');

  const handleOnFilterPopup = () => {
    setIsComponentVisible(true);
  };

  const handleItemClick = (
    e: React.MouseEvent<HTMLElement>,
    popupData: IPopupData,
  ) => {
    e.stopPropagation();
    if (popupData.status === 'is:open' || popupData.status === 'is:close') {
      init({ paramValue: popupData.status });
    } else {
      replace('me', popupData.status);
    }
    setIsComponentVisible(false);
  };

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidSearch) alert('문자수 길이를 체크해주세요!');
    // debouncedValue 파싱 함수 호출 이후 파싱된 데이터로 api 요청하기
  };

  useEffect(() => {
    if (debouncedValue) {
      if (debouncedValue.length > limitedLengthSearchValue)
        setIsValidSearch(false);
      else setIsValidSearch(true);
    }
  }, [debouncedValue]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlValues = params.get('q');

    if (urlValues === null) return;

    setSearchValue(urlValues);
  }, [location]);

  return (
    <S.FilterBarLayer onSubmit={handleSubmit}>
      <S.FilterButton onClick={handleOnFilterPopup}>
        <span>필터</span>
        <div
          ref={ref}
          css={css`
            position: absolute;
            left: 0;
            top: 3rem;
          `}
        >
          {isComponentVisible && (
            <Popup>
              <header>이슈 필터</header>
              {issueFilterData.info.map((popupData: IPopupData) => (
                <Contents
                  key={`popup-${popupData.name}`}
                  item="이슈"
                  popupData={popupData}
                  handleItemClick={handleItemClick}
                />
              ))}
            </Popup>
          )}
        </div>
        <I.ArrowDown />
      </S.FilterButton>
      <S.SearchBar>
        <S.Icon>
          <I.Search />
        </S.Icon>
        <S.Input
          type="text"
          value={searchValue}
          placeholder="Search All Issues"
          onChange={handleChangeSearchInput}
        />
      </S.SearchBar>
      <S.FilterErrorText>
        {!isValidSearch && (
          <span>검색 문자가 {limitedLengthSearchValue}자 초과하였습니다.</span>
        )}
      </S.FilterErrorText>
    </S.FilterBarLayer>
  );
}
