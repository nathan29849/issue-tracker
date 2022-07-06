import styled from '@emotion/styled';

import { flexbox, typoSmall, typoXSmall } from '@styles/mixin';

export const Header = styled.header`
  ${flexbox({ ai: 'center' })}
  height: 3.75rem;
  padding: 1rem 1.5rem;
`;

export const CommentAuthorInfo = styled.div`
  ${typoSmall(400)};
  flex-grow: 1;
`;

export const CommentAuthor = styled.span`
  margin-right: 0.5rem;
`;

export const TimeStamp = styled.span`
  color: ${({ theme }) => theme.color.label};
`;

export const IssueAuthorLabel = styled.span`
  ${typoXSmall(400)};
  line-height: 1.6;
  margin-right: 1.5rem;
`;

export const Buttons = styled.div`
  ${flexbox({ ai: 'center' })};
`;

export const EditButton = styled.span`
  margin-right: 1.25rem;
`;

export const EmojiButton = styled.span`
  color: ${({ theme }) => theme.color.label};
`;

export const Content = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.color.offWhite};
  line-height: 1.75;
`;

export const CommentLayer = styled.article<{
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
}>(
  ({ theme, borderColor, bgColor, textColor }) => `
  min-width: 30rem;
  max-width: 55rem;
  border-radius: 1rem;
  overflow: hidden;

  border: 1px solid ${borderColor || theme.color.line};

  ${Header} {
    background-color: ${bgColor || theme.color.background};
    border-bottom: 1px solid ${borderColor || theme.color.line};
  }

  ${CommentAuthor} {
    color: ${textColor || theme.color.titleActive};
  }

  ${Content} {
    color: ${textColor || theme.color.titleActive};
  }
`,
);
