import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
import Filter from '@components/Issue/Filter';
import I from '@components/Icons';
import { useRecoilValue } from 'recoil';
import { issueState } from '@recoil/atoms/issue';

const NavigationStyle = styled.header`
  height: 4rem;
  padding: 0 2rem;
  ${flexbox({ dir: 'row', jc: 'space-between', ai: 'center' })}
`;

const LeftAreaStyle = styled.nav`
  gap: 1.5rem;
  ${flexbox({ dir: 'row', jc: 'space-between', ai: 'center' })}
`;

const RightAreaStyle = styled.nav`
  gap: 1.5rem;
  ${flexbox({ dir: 'row', jc: 'flex-start', ai: 'center' })}
`;

const OpenedIssueStyle = styled.div`
  color: ${({ theme }) => theme.color.titleActive};
  span {
    margin-left: 0.375rem;
  }
`;

const ClosedIssueStyle = styled.div`
  color: ${({ theme }) => theme.color.label};

  span {
    margin-left: 0.375rem;
  }
`;

export default function Navigation() {
  const filterLabels = ['담당자', '레이블', '마일스톤', '작성자'];
  const issue = useRecoilValue(issueState);

  return (
    <NavigationStyle>
      <LeftAreaStyle>
        <I.CheckBox.Initial color="#D9DBE9" />
        <OpenedIssueStyle>
          <I.Circle.Alert />
          <span>열린 이슈(2)</span>
        </OpenedIssueStyle>

        <ClosedIssueStyle>
          <I.Bucket />
          <span>닫힌 이슈(0)</span>
        </ClosedIssueStyle>
      </LeftAreaStyle>
      <RightAreaStyle>
        {filterLabels.map((label: string) => {
          return <Filter key={`${label}`} label={label} />;
        })}
      </RightAreaStyle>
    </NavigationStyle>
  );
}
