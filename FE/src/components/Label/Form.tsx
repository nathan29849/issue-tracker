import * as S from './formStyle';

export default function Form({ title }: { title: string }) {
  return (
    <S.FormWrapper>
      <h1>{title}</h1>
    </S.FormWrapper>
  );
}
