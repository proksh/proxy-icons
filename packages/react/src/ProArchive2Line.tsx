import * as React from "react";
import { IconProps } from "./types";

export const ProArchive2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15 11H9v2h6z" />
        <path
          fill={color}
          d="M4.382 3 2 7.764V21h20V7.764L19.618 3zm14 2 1 2H4.618l1-2zM4 9h16v10H4z"
        />
      </svg>
    );
  },
);

export default ProArchive2Line;
