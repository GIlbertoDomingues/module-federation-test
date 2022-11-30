declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';

  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.pdf' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.woff' {
  const value: string;
  export default value;
}
declare module '*.woff2' {
  const value: string;
  export default value;
}
