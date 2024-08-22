import * as React from "react";
import { IconProps } from "./types";

export const ProFileCloudLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15.914 2H3v20h7v-2H5V4h10v4h4v4h2V7.086z" />
        <path
          fill={color}
          d="M17.5 13a4 4 0 0 1 3.88 3.024A3 3 0 0 1 21 22h-7a3 3 0 0 1-.38-5.976A4 4 0 0 1 17.5 13m2 4a2 2 0 1 0-4 0v1H14a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-1.5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFileCloudLine;
