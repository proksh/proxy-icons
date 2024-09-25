import * as React from "react";
import { IconProps } from "./types";

export const ProRam2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5 12V9h2v3zm4-3v3h2V9zm4 3V9h2v3zm4-3v3h2V9z" />
        <path
          fill={color}
          d="M2 5 1 6v9l1 1v2l1 1h6l.832-.445.703-1.055h2.93l.703 1.055L15 19h6l1-1v-2l1-1V6l-1-1zm18 11v1h-4.465l-.667-1zM9.131 16l-.666 1H4v-1zM3 14V7h18v7z"
        />
      </svg>
    );
  },
);

export default ProRam2Line;
