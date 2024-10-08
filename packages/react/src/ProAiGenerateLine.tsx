import * as React from "react";
import { IconProps } from "./types";

export const ProAiGenerateLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.449 2.868 18.635 2h.73l.187.868a3.36 3.36 0 0 0 2.58 2.58l.868.187v.73l-.868.186a3.36 3.36 0 0 0-2.58 2.581l-.187.868h-.73l-.187-.868a3.36 3.36 0 0 0-2.58-2.58L15 6.365v-.73l.868-.186a3.36 3.36 0 0 0 2.58-2.581"
        />
        <path fill={color} d="M13 3H2v18h20v-9h-2v7H4V5h9z" />
      </svg>
    );
  },
);

export default ProAiGenerateLine;
