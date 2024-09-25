import * as React from "react";
import { IconProps } from "./types";

export const ProSlashCommandLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 6a3 3 0 0 1 3-3h1v2H7a1 1 0 0 0-1 1v4c0 .768-.289 1.47-.764 2 .475.53.764 1.232.764 2v4a1 1 0 0 0 1 1h1v2H7a3 3 0 0 1-3-3v-4a1 1 0 0 0-1-1H2v-2h1a1 1 0 0 0 1-1z"
        />
        <path
          fill={color}
          d="M4 6a3 3 0 0 1 3-3h1v2H7a1 1 0 0 0-1 1v4c0 .768-.289 1.47-.764 2 .475.53.764 1.232.764 2v4a1 1 0 0 0 1 1h1v2H7a3 3 0 0 1-3-3v-4a1 1 0 0 0-1-1H2v-2h1a1 1 0 0 0 1-1z"
        />
        <path
          fill={color}
          d="M4 6a3 3 0 0 1 3-3h1v2H7a1 1 0 0 0-1 1v4c0 .768-.289 1.47-.764 2 .475.53.764 1.232.764 2v4a1 1 0 0 0 1 1h1v2H7a3 3 0 0 1-3-3v-4a1 1 0 0 0-1-1H2v-2h1a1 1 0 0 0 1-1zm13-3a3 3 0 0 1 3 3v4a1 1 0 0 0 1 1h1v2h-1a1 1 0 0 0-1 1v4a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1v-4c0-.768.289-1.47.764-2A3 3 0 0 1 18 10V6a1 1 0 0 0-1-1h-1V3z"
        />
        <path
          fill={color}
          d="M17 3a3 3 0 0 1 3 3v4a1 1 0 0 0 1 1h1v2h-1a1 1 0 0 0-1 1v4a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1v-4c0-.768.289-1.47.764-2A3 3 0 0 1 18 10V6a1 1 0 0 0-1-1h-1V3z"
        />
        <path
          fill={color}
          d="M17 3a3 3 0 0 1 3 3v4a1 1 0 0 0 1 1h1v2h-1a1 1 0 0 0-1 1v4a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1v-4c0-.768.289-1.47.764-2A3 3 0 0 1 18 10V6a1 1 0 0 0-1-1h-1V3zm-2.28 4h-2.107L9.279 17h2.108z"
        />
        <path fill={color} d="M14.72 7h-2.107L9.279 17h2.108z" />
        <path fill={color} d="M14.72 7h-2.107L9.279 17h2.108z" />
      </svg>
    );
  },
);

export default ProSlashCommandLine;
