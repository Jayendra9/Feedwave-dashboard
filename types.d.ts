// src/types.d.ts
declare global {
    namespace JSX {
      interface IntrinsicElements {
        "my-widget": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>, 
          HTMLElement
        > & { "project-id"?: string };
      }
    }
  }
  export {}; // Required to make this a module
  