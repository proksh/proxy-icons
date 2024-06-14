import * as React from "react";
import { IconProps } from "./types";

export const ProSignalTowerLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4a8 8 0 0 0-4.8 14.4L6 20a9.99 9.99 0 0 1-4-8C2 6.477 6.477 2 12 2s10 4.477 10 10a9.99 9.99 0 0 1-4 8l-1.2-1.6A8 8 0 0 0 12 4"
        />
        <path
          fill={color}
          d="M18 12a5.99 5.99 0 0 1-2.4 4.8l-1.2-1.6a4 4 0 1 0-4.8 0l-1.2 1.6A6 6 0 1 1 18 12"
        />
        <path fill={color} d="M11 13v9h2v-9z" />
      </svg>
    );
  },
);

export default ProSignalTowerLine;
