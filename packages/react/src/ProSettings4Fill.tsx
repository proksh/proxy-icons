import * as React from "react";
import { IconProps } from "./types";

export const ProSettings4Fill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="m12 .845 9.66 5.578v11.154L12 23.155l-9.66-5.578V6.423zM8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0"
        />
      </svg>
    );
  },
);

export default ProSettings4Fill;
