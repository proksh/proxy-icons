import * as React from "react";
import { IconProps } from "./types";

export const ProCollageLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 3H3v18h18zM5 12.639V5h4.492l1.285 6.263zm0 2.056 6.179-1.472L12.364 19H5zM14.405 19 11.534 5H19v14z"
        />
      </svg>
    );
  },
);

export default ProCollageLine;
