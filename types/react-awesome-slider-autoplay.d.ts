declare module "react-awesome-slider/dist/autoplay" {
  import { ReactNode, ComponentType } from "react";
  import AwesomeSlider from "react-awesome-slider";

  interface AutoplayProps {
    children?: ReactNode;
    className?: string;
    play: boolean;
    cancelOnInteraction?: boolean;
    interval?: number;
    bullets: boolean;
  }

  const withAutoplay: (
    component: typeof AwesomeSlider,
  ) => ComponentType<AutoplayProps>;

  export default withAutoplay;
}
