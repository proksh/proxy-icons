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
      viewBox="0 0 24 24"
      {...props}
      ref={forwardedRef}
    >
      <path
        fill={color}
        d="M5 19a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M12 4a8 8 0 0 0-1.469 15.866l.305.056L12 21.086l1.164-1.164.305-.056A8 8 0 0 0 12 4M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.787-3.363 8.787-7.855 9.77L12 23.913 9.855 21.77C5.363 20.787 2 16.787 2 12"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M12 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M8.5 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default ProAccountPinCircleLine;
