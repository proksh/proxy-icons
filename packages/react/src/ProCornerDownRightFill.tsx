import * as React from "react";
import { IconProps } from "./types";

export const ProCornerDownRightFill = React.forwardRef<
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
        d="M7 12V5H5v9h8v4.5l1.707.707 5.5-5.5v-1.414l-5.5-5.5L13 7.5V12z"
      />
    </svg>
  );
});

export default ProCornerDownRightFill;
