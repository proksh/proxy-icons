import * as React from "react";
import { IconProps } from "./types";

export const ProCodeSSlashLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15.974 4h-2.129L8.028 20h2.129z" />
        <path fill={color} d="M15.974 4h-2.129L8.028 20h2.129z" />
        <path
          fill={color}
          d="M15.974 4h-2.129L8.028 20h2.129zM6.293 6.293l1.414 1.414L3.414 12l4.293 4.293-1.414 1.414L.586 12z"
        />
        <path
          fill={color}
          d="m6.293 6.293 1.414 1.414L3.414 12l4.293 4.293-1.414 1.414L.586 12z"
        />
        <path
          fill={color}
          d="m6.293 6.293 1.414 1.414L3.414 12l4.293 4.293-1.414 1.414L.586 12zm11.414 0-1.414 1.414L20.586 12l-4.293 4.293 1.414 1.414L23.414 12z"
        />
        <path
          fill={color}
          d="m17.707 6.293-1.414 1.414L20.586 12l-4.293 4.293 1.414 1.414L23.414 12z"
        />
        <path
          fill={color}
          d="m17.707 6.293-1.414 1.414L20.586 12l-4.293 4.293 1.414 1.414L23.414 12z"
        />
      </svg>
    );
  },
);

export default ProCodeSSlashLine;
