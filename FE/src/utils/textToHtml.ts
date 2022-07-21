// 1. ![$1]($2) 포맷을 <img src="$2" alt="$1" /> 로 바꾼다.
// 2. \n을 기준으로 나눈 뒤, 각 행마다 <p></p>로 감싼다.

const imgMarkdownRegExp =
  /!\[([\w\s-ㅎ가-힣:/.+$-?]*)]\(([\w\sㄱ-ㅎ가-힣:/.+$-?]*)\)/g;

// 코멘트 컴포넌트가 기본적으로 text를 props로 갖고 있기 때문에, 필요 없을 것 같으나 일단 놔둠.
const imgElementRegExp =
  /<img src="([\w\s-ㅎ가-힣:/.+$-?]*)" alt="([\w\s-ㅎ가-힣:/.+$-?]*)"\s?\/?>/g;

const LF = '\n';

export const textToHtml = (text: string) =>
  text
    .replace(imgMarkdownRegExp, `<img src="$2" alt="$1" />`)
    .split(LF)
    .map(row => `<p>${row}</p>`)
    .join('');
