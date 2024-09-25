import * as React from "react";
import { IconProps } from "./types";

export const ProGroupLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.5 22h2v-2a5 5 0 0 0-3.107-4.63A6.47 6.47 0 0 1 20.5 19zM16.893 8.226a7 7 0 0 1-1.975 3.755 4.5 4.5 0 0 0 .974-8.761 6.97 6.97 0 0 1 1.101 4.093 2.5 2.5 0 0 1-.1.913"
        />
        <path
          fill={color}
          d="M10 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M5 7a5 5 0 1 1 10 0A5 5 0 0 1 5 7M1 19a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3h-2v-3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v3H1z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProGroupLine;
