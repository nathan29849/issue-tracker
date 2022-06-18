import { css } from '@emotion/react';

import { ItemLayer, ContentLayer, Title, Description } from './style';

import I from '@components/Icons';

export default function Item({ issue }: any) {
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
          <Description>{issue.author[0].name}</Description>
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
