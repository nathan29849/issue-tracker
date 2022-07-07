import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import * as S from './style';

import I from '@components/Icons';
import Popup from '@components/Popup';
import Contents from '@components/Popup/Contents';
import { IPopupData } from '@components/Popup/type';
import useComponentVisible from '@hooks/useComponentVisible';
import { useSearch } from '@hooks/useSearch';
import { issueState } from '@recoil/atoms/issue';
import { checkSearchParamKey } from '@utils/inputSearch';

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

  const setIssueState = useSetRecoilState(issueState);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const { urlParamInit, urlParamReplace } = useSearch('q', 'is:open');

  const handleOnFilterPopup = () => {
    setIsComponentVisible(true);
  };

  const handleItemClick = (
    e: React.MouseEvent<HTMLElement>,
    popupData: IPopupData,
  ) => {
    e.stopPropagation();
    if ((e.target as Element).classList.contains('popup-header')) return;
    if (popupData.status === 'is:open' || popupData.status === 'is:close') {
      urlParamInit({ paramValue: popupData.status });
    } else {
      urlParamReplace('me', popupData.status);
    }

    // TODO: call filter get api => response issue recoil set
    setIssueState([]);
    setIsComponentVisible(false);
  };

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkSearchParamKey(searchValue)) {
      // 사용자에게 부정확한 키가 존재한다고 알려주기.
      setSearchValue('');
    }
    // TODO: call filter get api => response issue recoil set
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlValues = params.get('q');

    if (urlValues === null) return;

    setSearchValue(urlValues);
  }, [location]);

  return (
    <S.FilterBarLayer onSubmit={handleSearchSubmit}>
      <S.FilterButton onClick={handleOnFilterPopup}>
        <span>Filter</span>
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
              <header className="popup-header">Issue Filter</header>
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
    </S.FilterBarLayer>
  );
}
