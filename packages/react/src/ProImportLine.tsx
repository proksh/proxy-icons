import * as React from "react";
import { IconProps } from "./types";

export const ProImportLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 6v3.586L9.707 8.293 8.293 9.707 12 13.414l3.707-3.707-1.414-1.414L13 9.586V6z"
        />
        <path
          fill={color}
          d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm17 10V5H4v8h4.126l.968.75a3.002 3.002 0 0 0 5.812 0l.968-.75zM4 15v4h16v-4h-3.416a5 5 0 0 1-9.168 0z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProImportLine;
