import { render, waitFor } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import IssueItem from '@components/Issue/Item';
import MockTheme from '@components/MockTheme';

const mockFetch = mockData => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    }),
  );
};

test('Get Issue Data', async () => {
  // given
  const result = {
    id: 1,
    number: 3,
    status: 'open',
    title: '로그인 페이지 기능 작업',
    manager: ['muffin', 'cola'],
    labels: ['feat', 'sub', 'bug'],
    milestone: '1주차 이슈트래커',
    author: [{ name: 'muffin', iamgeUrl: 'http://xxx' }],
    date: '2022-12-17T03:24:00',
  };

  mockFetch(result);

  // when
  const { getByText } = render(
    <MockTheme>
      <IssueItem issue={result} />
    </MockTheme>,
  );

  // then
  await waitFor(() => getByText(result.title));
});
