import { css } from '@emotion/react';
import React from 'react';

import { ItemLayer, ContentLayer, Title, Description } from './style';

import I from '@components/Icons';
import { IIssue } from '@interfaces/IIssue';

interface IIssueItemProps {
  issue: IIssue;
  lastIdx?: boolean;
  isCheck: boolean;
  handleIssueCheck: (id: number) => void;
}

export default function Item({
  issue,
  lastIdx,
  isCheck,
  handleIssueCheck,
}: IIssueItemProps) {
  return (
    <ItemLayer lastIdx={lastIdx}>
      {isCheck ? (
        <button type="button" onClick={() => handleIssueCheck(issue.id)}>
          <I.CheckBox.Active color="#007AFF" />
        </button>
      ) : (
        <button type="button" onClick={() => handleIssueCheck(issue.id)}>
          <I.CheckBox.Initial color="#D9DBE9" />
        </button>
      )}
      <ContentLayer>
        <div>
          <I.Circle.Alert color="#007AFF" />
          <Title>{issue.title}</Title>
        </div>
        <div>
          <Description>#{issue.id}</Description>
          <Description>{issue.author.username}</Description>
          <I.MileStone />{' '}
          <Description>{issue.milestone.description}</Description>
        </div>
        <div
          css={css`
            position: absolute;
            top: 2rem;
            right: 3.2rem;
          `}
        >
          <I.Smile />
        </div>
      </ContentLayer>
    </ItemLayer>
  );
}
