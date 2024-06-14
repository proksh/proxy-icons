import * as React from "react";
import { IconProps } from "./types";

export const ProRidingLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.825 4.311a2 2 0 1 0 2.677-2.972 2 2 0 0 0-2.677 2.972M13 12.144l-2.147-1.927 2.738-3.041C15.15 8.826 16.99 10 19 10V8c-1.513 0-3.215-1.137-4.868-3.268a2 2 0 0 0-3.293-.478L7.21 8.284l.074 1.413.05.045-.002.002L11 13.036V18h2z"
        />
        <path
          fill={color}
          d="M5.5 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m0-2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m13 2a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m0-2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
        />
      </svg>
    );
  },
);

export default ProRidingLine;
