import * as React from "react";
import { IconProps } from "./types";

export const ProBarChart2Line = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="M10 2h5v20h-5zm2 2v16h1V4zM3 8h5v14H3zm2 2v10h1V10zm17 1h-5v11h5zm-3 9v-7h1v7z"
        />
      </svg>
    );
  },
);

export default ProBarChart2Line;
