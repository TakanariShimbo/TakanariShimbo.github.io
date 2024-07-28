import { Icon } from "@iconify/react";

interface ArrowProps {
  direction: "left" | "right";
  beforeGradient: boolean;
  afterGradient: boolean;
  onClick?: () => void;
  resetProgress?: () => void;
}

const CustomArrow = ({
  direction,
  beforeGradient,
  afterGradient,
  onClick,
  resetProgress,
}: ArrowProps) => {
  const isLeft = direction === "left";
  const beforeGradientFrom = beforeGradient ? "from-gray-500" : "";
  const afterGradientFrom = afterGradient
    ? "active:from-gray-900 hover:from-gray-900"
    : "";
  const gradientDirection = isLeft ? "bg-gradient-to-r" : "bg-gradient-to-l";
  const icon = isLeft
    ? "iconamoon:arrow-left-2-bold"
    : "iconamoon:arrow-right-2-bold";
  const position = isLeft ? "left-0" : "right-0";

  const handleClick = () => {
    if (onClick) onClick();
    if (resetProgress) resetProgress();
  };

  return (
    <button
      className={`absolute ${position} top-0 z-10 flex h-full flex-col justify-center p-2 ${gradientDirection} ${beforeGradientFrom} ${afterGradientFrom}`}
      onClick={handleClick}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full text-white">
        <Icon icon={icon} fontSize="40px" />
      </span>
    </button>
  );
};

export default CustomArrow;
