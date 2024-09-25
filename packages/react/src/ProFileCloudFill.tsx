import * as React from "react";
import { IconProps } from "./types";

export const ProFileCloudFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.914 2H3v20h7a5.002 5.002 0 0 1 2.105-7.628A6 6 0 0 1 21 12.126v-5.04z"
        />
        <path
          fill={color}
          d="M21.38 16.024a4.002 4.002 0 0 0-7.76 0A3 3 0 0 0 14 22h7a3 3 0 0 0 .38-5.976"
        />
      </svg>
    );
  },
);

export default ProFileCloudFill;
