// react-scroll.d.ts
declare module "react-scroll" {
  import { ReactNode, Component } from "react";

  export interface LinkProps {
    to: string;
    smooth?: boolean | object;
    duration?: number | string;
    className?: string;
    onClick?: () => void;
    children?: ReactNode;
  }

  export class Link extends Component<LinkProps> {}
}
