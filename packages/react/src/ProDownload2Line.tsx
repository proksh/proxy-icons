import * as React from "react";
import { IconProps } from "./types";

export const ProDownload2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.293 8.293 13 13.586V2h-2v11.586L5.707 8.293 4.293 9.707 12 17.414l7.707-7.707z"
        />
        <path fill={color} d="M4 15.5v3.25h16V15.5h2v4.25l-1 1H3l-1-1V15.5z" />
      </svg>
    );
  },
);

export default ProDownload2Line;
