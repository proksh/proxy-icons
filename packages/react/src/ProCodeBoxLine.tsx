import * as React from "react";
import { IconProps } from "./types";

export const ProCodeBoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.707 9.707 8.293 8.293 4.586 12l3.707 3.707 1.414-1.414L7.414 12z"
        />
        <path
          fill={color}
          d="M9.707 9.707 8.293 8.293 4.586 12l3.707 3.707 1.414-1.414L7.414 12z"
        />
        <path
          fill={color}
          d="M9.707 9.707 8.293 8.293 4.586 12l3.707 3.707 1.414-1.414L7.414 12zm6-1.414-1.414 1.414L16.586 12l-2.293 2.293 1.414 1.414L19.414 12z"
        />
        <path
          fill={color}
          d="m15.707 8.293-1.414 1.414L16.586 12l-2.293 2.293 1.414 1.414L19.414 12z"
        />
        <path
          fill={color}
          d="m15.707 8.293-1.414 1.414L16.586 12l-2.293 2.293 1.414 1.414L19.414 12zM14.72 7h-2.107L9.279 17h2.108z"
        />
        <path fill={color} d="M14.72 7h-2.107L9.279 17h2.108z" />
        <path fill={color} d="M14.72 7h-2.107L9.279 17h2.108z" />
        <path fill={color} d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm1 16V5h16v14z" />
        <path fill={color} d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm1 16V5h16v14z" />
        <path fill={color} d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm1 16V5h16v14z" />
      </svg>
    );
  },
);

export default ProCodeBoxLine;
