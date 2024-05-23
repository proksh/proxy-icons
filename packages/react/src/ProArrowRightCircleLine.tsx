import * as React from "react";
import { IconProps } from "./types";

export const ProArrowRightCircleLine = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      {...props}
      ref={forwardedRef}
    >
      <path fill={color} d="M12 7.987v2.751H7.992v2.5H12v2.752l4-3.992z" />
      <path
        fill={color}
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default ProArrowRightCircleLine;
