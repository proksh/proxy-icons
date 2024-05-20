import * as React from "react";
import { IconProps } from "./types";

export const ProAccountPinCircleLine = React.forwardRef<
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
      <path
        fill={color}
        d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m-1.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.787-3.363 8.787-7.855 9.77L12 23.913 9.855 21.77C5.363 20.787 2 16.787 2 12m10-8a8 8 0 0 0-6.455 12.727A5 5 0 0 1 10 14h4a5 5 0 0 1 4.455 2.727A8 8 0 0 0 12 4m-1.469 15.866a7.96 7.96 0 0 1-3.451-1.557A3 3 0 0 1 10 16h4a3 3 0 0 1 2.92 2.309 7.96 7.96 0 0 1-3.451 1.557l-.305.056L12 21.086l-1.164-1.164z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default ProAccountPinCircleLine;