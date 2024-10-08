import * as React from "react";
import { IconProps } from "./types";

export const ProAccountPinCircleFill = React.forwardRef<
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
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.787-3.363 8.787-7.855 9.77L12 23.913 9.855 21.77C5.363 20.787 2 16.787 2 12m10 7a7 7 0 0 0 5.863-3.174A4.99 4.99 0 0 0 14 14h-4a4.99 4.99 0 0 0-3.863 1.826A7 7 0 0 0 12 19m0-12.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
      />
    </svg>
  );
});

export default ProAccountPinCircleFill;
