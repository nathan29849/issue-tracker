import { css } from '@emotion/react';
import React from 'react';

import { ItemLayer, ContentLayer, Title, Description } from './style';

import I from '@components/Icons';

interface IIssueItem {
  id: number;
  author: { name: string; imageUrl: string }[];
  date: string;
  labels: string[];
  manager: string[];
  milestone: string;
  number: number;
  status: string;
  title: string;
}

export default function Item({ issue }: { issue: IIssueItem }) {
  return (
    <ItemLayer>
      <I.CheckBox.Initial color="#D9DBE9" />
      <ContentLayer>
        <div>
          <I.Circle.Alert color="#007AFF" />
          <Title>{issue.title}</Title>
        </div>
        <div>
          <Description>#{issue.number}</Description>
          {/* <Description>{issue.author[0].name}</Description> */}
          <I.MileStone /> <Description>{issue.milestone}</Description>
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
