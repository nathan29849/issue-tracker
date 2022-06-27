import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';

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
  const issueFilterData = {
    info: [
      { id: 1, status: 'is:open', name: '열린이슈' },
      { id: 2, status: 'mine:me', name: '내가작성한이슈' },
      { id: 3, status: 'assignedToMe:me', name: '나에게할당된이슈' },
      { id: 4, status: 'comment:me', name: '내가댓글을남긴이슈' },
      { id: 5, status: 'is:close', name: '닫힌이슈' },
    ],
  };

  const [searchValue, setSearchValue] = useState('');
  const [isValidSearch, setIsValidSearch] = useState(true);
  const debouncedValue = useDebounce(searchValue, searchDebounceDelay);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const { init } = useSearch('q', 'is:open');

  const handleOnFilterPopup = () => {
    setIsComponentVisible(true);
  };

  const handleItemClick = (
    e: React.MouseEvent<HTMLElement>,
    popupData: IPopupData,
  ) => {
    e.stopPropagation();
    init({ paramValue: popupData.status });
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
                  key={`popup-${popupData.id}`}
                  label="이슈"
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
