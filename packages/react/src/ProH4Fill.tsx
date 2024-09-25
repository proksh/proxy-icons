import * as React from "react";
import { IconProps } from "./types";

export const ProH4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.5 4v17h3v-7.5h6V21h3V4h-3v6.5h-6V4zm21 4h-3.258L14.5 15.76v2.74h5V21h3v-2.5h1v-3h-1zm-3 7.5h-1.326l1.326-2.169z"
        />
      </svg>
    );
  },
);

export default ProH4Fill;
