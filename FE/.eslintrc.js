module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: ['prettier'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['tsx', 'jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off', // export default 가 아닌 default 없이 export 할 수 있도록
    'react/require-default-props': 'off', // type 지정시 optional 연산자를 사용했을때 막기 위한 속성
    'react/prop-types': 'off', //  props의 타입체크를 처리에 proptypes가 아닌 typescript 사용
    'no-nested-ternary': 'off', // 중첩 삼항연산자 옵션 끄기
    'react/function-component-definition': [
      // 함수형 컴포넌트 선언방식
      2,
      {
        namedComponents: ['function-declaration', 'arrow-function'],
      },
    ],

    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
