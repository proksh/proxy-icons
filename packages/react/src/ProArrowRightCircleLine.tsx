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
      <path fill={color} d="M12 11V8l4 4-4 4v-3H8v-2z" />
      <path
        fill={color}
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default ProArrowRightCircleLine;
