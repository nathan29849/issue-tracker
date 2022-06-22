import { matchers } from '@emotion/jest';
import React from 'react';
import renderer from 'react-test-renderer';

import { Button, LoginButton } from '@components/Button';
import MockTheme from '@components/MockTheme';

expect.extend(matchers);

test('Button renders correctly', () => {
  const button = renderer
    .create(
      <MockTheme>
        <Button>Button</Button>
      </MockTheme>,
    )
    .toJSON();

  expect(button).toHaveStyleRule('color', '#FEFEFE');
  expect(button).toHaveStyleRule('color', '#FEFEFE', {
    target: ':hover',
  });
  expect(button).toHaveStyleRule('background-color', '#004DE3', {
    target: ':hover',
  });
  expect(button).toHaveStyleRule('border-color', '#004DE3', {
    target: ':hover',
  });
});

test('LoginButton renders correctly', () => {
  const loginButton = renderer
    .create(
      <MockTheme>
        <LoginButton textColor="#000000" bgColor="#FFFFFF">
          Button
        </LoginButton>
      </MockTheme>,
    )
    .toJSON();

  expect(loginButton).toHaveStyleRule('display', 'inline-flex');
  expect(loginButton).toHaveStyleRule('font-size', '1.125rem');
  expect(loginButton).toHaveStyleRule('font-weight', '700');
  expect(loginButton).toHaveStyleRule('padding', '0 1.5rem');
  expect(loginButton).toHaveStyleRule('min-width', '21.25rem');
  expect(loginButton).toHaveStyleRule('height', '4rem');
  expect(loginButton).toHaveStyleRule('border-radius', '20px');
  expect(loginButton).toHaveStyleRule('color', '#000000');
  expect(loginButton).toHaveStyleRule('background-color', '#FFFFFF');
});
