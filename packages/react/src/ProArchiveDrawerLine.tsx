import * as React from "react";
import { IconProps } from "./types";

export const ProArchiveDrawerLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M9 5.5h6v2H9zm6 10H9v2h6z" />
        <path
          fill={color}
          d="M4 2h16l1 1v18l-1 1H4l-1-1V3zm15 2H5v7h14zM5 13v7h14v-7z"
        />
      </svg>
    );
  },
);

export default ProArchiveDrawerLine;
