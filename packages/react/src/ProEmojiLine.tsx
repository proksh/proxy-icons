import * as React from "react";
import { IconProps } from "./types";

export const ProEmojiLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.5 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M10 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m2 5a4 4 0 0 1-3.2-1.6l-1.6 1.2A6 6 0 0 0 12 17a6 6 0 0 0 4.8-2.4l-1.6-1.2A4 4 0 0 1 12 15"
        />
        <path
          fill={color}
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
        />
      </svg>
    );
  },
);

export default ProEmojiLine;
