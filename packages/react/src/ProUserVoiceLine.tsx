import * as React from "react";
import { IconProps } from "./types";

export const ProUserVoiceLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.988 7.567a13 13 0 0 0-1.112-5.855l-1.827.814a11 11 0 0 1-.523 9.974l1.732 1a13 13 0 0 0 1.73-5.933"
        />
        <path
          fill={color}
          d="M5 7a5 5 0 1 1 10 0A5 5 0 0 1 5 7m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M18.222 3.34a9 9 0 0 1-.428 8.16l-1.732-1a7 7 0 0 0 .333-6.347zM6 14a5 5 0 0 0-5 5v3h2v-3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3h2v-3a5 5 0 0 0-5-5z"
        />
      </svg>
    );
  },
);

export default ProUserVoiceLine;
