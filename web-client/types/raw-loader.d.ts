// @NOTE type hack to satisfy imports from `!!raw-loader!` imports
declare module '!!raw-loader!*' {
  const value: string;
  export default value
}