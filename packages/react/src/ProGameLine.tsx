import * as React from "react";
import { IconProps } from "./types";

export const ProGameLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
        <path
          fill={color}
          d="M13.95 2.192a10 10 0 1 0 5.121 16.88l.707-.708L13.414 12l6.364-6.364-.707-.707a10 10 0 0 0-5.12-2.737M8.94 4.61a8 8 0 0 1 7.966 1.071L10.585 12l6.32 6.32A8 8 0 1 1 8.94 4.609"
        />
      </svg>
    );
  },
);

export default ProGameLine;
