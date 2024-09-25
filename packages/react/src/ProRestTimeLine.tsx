import * as React from "react";
import { IconProps } from "./types";

export const ProRestTimeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 5h5l-4.8 6.4.8 1.6h6.5v-2H16l4.8-6.4L20 3h-7z"
        />
        <path
          fill={color}
          d="M11 20a6 6 0 0 0 5.98-5.5h2.005a8 8 0 1 1-4.288-7.596l-1.222 1.629A6 6 0 1 0 11 20"
        />
      </svg>
    );
  },
);

export default ProRestTimeLine;
