import * as React from "react";
import { IconProps } from "./types";

export const ProServerLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 6.5h3v2H7zm3 9H7v2h3z" />
        <path
          fill={color}
          d="M4 3 3 4v16l1 1h16l1-1V4l-1-1zm1 8V5h14v6zm0 2h14v6H5z"
        />
      </svg>
    );
  },
);

export default ProServerLine;
