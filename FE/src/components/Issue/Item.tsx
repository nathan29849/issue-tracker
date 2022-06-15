import styled from '@emotion/styled';
import I from '@components/Icons';
import { flexbox, typoMedium, typoSmall } from '@styles/mixin';
import { css } from '@emotion/react';

const ItemStyle = styled.div`
  position: relative;
  padding: 1rem 2rem;
  background-color: #fefefe;
  border-bottom: 1px solid #d9dbe9;
  ${flexbox({ dir: 'row', jc: 'flex-start', ai: 'flex-start' })}
`;

const ContentStyle = styled.div`
  ${flexbox({ dir: 'column', jc: 'flex-start', ai: 'flex-start' })}
  gap: 1rem;
  margin-left: 1.5rem;
`;

const TitleStyle = styled.h4`
  display: inline-block;
  margin-left: 10px;
  ${typoMedium(700)}
`;

const DescriptionStyle = styled.span`
  color: ${({ theme }) => theme.color.label};
  margin-right: 1rem;
  ${typoSmall(400)}
`;

export default function Item({ issue }: any) {
  return (
    <ItemStyle>
      <I.CheckBox.Initial color="#D9DBE9" />
      <ContentStyle>
        <div>
          <I.Circle.Alert color="#007AFF" />
          <TitleStyle>{issue.title}</TitleStyle>
        </div>
        <div>
          <DescriptionStyle>#{issue.number}</DescriptionStyle>
          <DescriptionStyle>{issue.author[0].name}</DescriptionStyle>
          <I.MileStone /> <DescriptionStyle>{issue.milestone}</DescriptionStyle>
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
      </ContentStyle>
    </ItemStyle>
  );
}
