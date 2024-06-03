import * as React from "react";
import { IconProps } from "./types";

export const ProRewindStartMiniFill = React.forwardRef<
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
        d="M4 7v10H2V7zm9 1-1.496-.868-7 4v1.736l7 4L13 16zm9 0-1.496-.868-7 4v1.736l7 4L22 16z"
      />
    </svg>
  );
});

export default ProRewindStartMiniFill;
