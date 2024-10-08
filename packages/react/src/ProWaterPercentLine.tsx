import * as React from "react";
import { IconProps } from "./types";

export const ProWaterPercentLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m7.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.707-7.207-7 7 1.414 1.414 7-7z"
        />
        <path
          fill={color}
          d="M18.375 6.647 12 .062 5.625 6.647A8.97 8.97 0 0 0 3 13a9 9 0 1 0 15.375-6.353M7.052 8.049 12 2.938l4.948 5.11.006.006q.076.077.15.156a7 7 0 1 1-10.058-.156z"
        />
      </svg>
    );
  },
);

export default ProWaterPercentLine;
