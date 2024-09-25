import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteBackLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16 11H9v2h7z" />
        <path
          fill={color}
          d="m6.5 3-.848.47-5 8v1.06l5 8L6.5 21H21l1-1V4l-1-1zm-3.82 9 4.374-7H20v14H7.054z"
        />
      </svg>
    );
  },
);

export default ProDeleteBackLine;
