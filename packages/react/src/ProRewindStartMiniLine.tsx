import * as React from "react";
import { IconProps } from "./types";

export const ProRewindStartMiniLine = React.forwardRef<
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
        d="M4 7v10H2V7zm9 1-1.496-.868-7 4v1.736l7 4L13 16zm-2 6.277L7.016 12 11 9.723zM22 8l-1.496-.868-7 4v1.736l7 4L22 16zm-2 6.277L16.016 12 20 9.723z"
      />
    </svg>
  );
});

export default ProRewindStartMiniLine;
