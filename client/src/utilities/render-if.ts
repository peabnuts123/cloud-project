export default function renderIf(condition: boolean, jsxIfTrue: JSX.Element, jsxIfFalse?: JSX.Element): JSX.Element | undefined {
  if (condition) {
    return jsxIfTrue;
  } else {
    return jsxIfFalse;
  }
}
