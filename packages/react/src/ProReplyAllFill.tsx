import * as React from "react";
import { IconProps } from "./types";

export const ProReplyAllFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.696 17.032A8.96 8.96 0 0 0 16 15h-2v4.5L6 12l8-7.5V9c4.474 0 8.262 2.938 9.54 6.99l.01.036a10 10 0 0 1 .418 3.785 9 9 0 0 0-.484-.811 9 9 0 0 0-1.788-1.968"
        />
        <path
          fill={color}
          d="m2.974 12 5.704-5.265-1.357-1.47L.025 12l7.296 6.735 1.357-1.47z"
        />
      </svg>
    );
  },
);

export default ProReplyAllFill;
