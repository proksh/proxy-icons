import * as React from "react";
import { IconProps } from "./types";

export const ProBox3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.5 1.134h-1l-8.66 5-.5.866v10l.5.866 8.66 5h1l8.66-5 .5-.866V7l-.5-.866zm-7.253 5.92L12 3.154l6.753 3.9L12 10.853zM13 12.584l6.66-3.746v7.585L13 20.268zm-2 0L4.34 8.839v7.585L11 20.268z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProBox3Line;
