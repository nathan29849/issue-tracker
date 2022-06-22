import '@testing-library/jest-dom';

import { createSerializer } from '@emotion/jest';
import { render } from '@testing-library/react';
import React from 'react';

import { Button } from '@components/Button';
import MockTheme from '@components/MockTheme';

test('Button renders correctly', () => {
  const { getByText } = render(
    <MockTheme>
      <Button>Button</Button>
    </MockTheme>,
  );
  expect(getByText('Button'));
});
