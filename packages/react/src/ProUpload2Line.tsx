import * as React from "react";
import { IconProps } from "./types";

export const ProUpload2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4.293 9.293 1.414 1.414L11 5.414V17h2V5.414l5.293 5.293 1.414-1.414L12 1.586z"
        />
        <path fill={color} d="M4 15.5v3.25h16V15.5h2v4.25l-1 1H3l-1-1V15.5z" />
      </svg>
    );
  },
);

export default ProUpload2Line;
