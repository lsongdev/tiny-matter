declare module 'tiny-matter' {
  function matter(str: string, options?: TinyMatterOptions): TinyMatterResult;

  interface TinyMatterOptions {
    delimiters?: [string, string];
    parser?: any;
  }

  interface TinyMatterResult {
    content: string;
    data?: object;
  }

  export = matter;
}
