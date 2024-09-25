import * as React from "react";
import { IconProps } from "./types";

export const ProH1Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.5 4v17h3v-7.5h6V21h3V4h-3v6.5h-6V4zm17.44 3.94-3 3 2.12 2.12.44-.439V21h3V9z"
        />
      </svg>
    );
  },
);

export default ProH1Fill;
