import * as React from "react";
import { IconProps } from "./types";

export const ProSdCardMiniLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M9 5v4h2V5zm3 4V5h2v4zm3-4v4h2V5z" />
        <path
          fill={color}
          d="M7 2 6 3v6.65l-1.78 2.225L4 12.5V21l1 1h14l1-1V3l-1-1zm1 8V4h10v16H6v-7.15l1.78-2.225z"
        />
      </svg>
    );
  },
);

export default ProSdCardMiniLine;
