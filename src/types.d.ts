declare module 'three' {
  export * from 'three/src/Three';
}

declare module '*?raw' {
  const content: string;
  export default content;
}
