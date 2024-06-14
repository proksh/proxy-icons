import * as React from "react";
import { IconProps } from "./types";

export const ProCreativeCommonsByFill = React.forwardRef<
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
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12m12-5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-5 4 1-1h4l1 1v4h-1.5v4h-3v-4H9z"
      />
    </svg>
  );
});

export default ProCreativeCommonsByFill;
