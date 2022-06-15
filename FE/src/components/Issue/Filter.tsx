import styled from '@emotion/styled';
import { typoSmall } from '@styles/mixin';

const FilterStyle = styled.div`
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.color.label};
    ${typoSmall(700)}
    margin-right: 0.5rem;
  }
`;

export default function Filter({ ...props }) {
  return (
    <FilterStyle>
      <span>{props.label}</span>
    </FilterStyle>
  );
}
