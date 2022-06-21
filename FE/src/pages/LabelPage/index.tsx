import { useQuery } from 'react-query';

import * as S from './style';

import { Button } from '@components/Button';
import I from '@components/Icons';
import { Label } from '@components/Label';
import Form from '@components/Label/Form';
import TabList from '@components/TabList';

const getLabels = async () => {
  const res = await fetch('/issue/label');
  return res.json();
};

export default function LabelPage() {
  const { data, status } = useQuery('labelData', getLabels);

  return (
    <S.LabelPageLayer>
      <S.Header>
        <TabList />
        <Button>
          <I.Plus />
          추가
        </Button>
      </S.Header>
      <Form title="새로운 레이블 추가" />
      <S.Main>
        <S.LabelCount>
          {status === 'success' ? data.length : 0}개의 레이블
        </S.LabelCount>
        {status === 'success' &&
          data.map((label: any) => (
            <S.LabelItemWrapper key={label.id}>
              <S.LabelLeft>
                <Label bgColor={label.color} darkText={label.darkText}>
                  {label.name}
                </Label>
                <S.LabelTitle>Label Title</S.LabelTitle>
              </S.LabelLeft>
              <S.LabelRight>
                <S.EditBox>
                  <I.Edit />
                  <span>편집</span>
                </S.EditBox>
                <S.TrashBox>
                  <I.Trash />
                  <span>삭제</span>
                </S.TrashBox>
              </S.LabelRight>
            </S.LabelItemWrapper>
          ))}
      </S.Main>
    </S.LabelPageLayer>
  );
}
