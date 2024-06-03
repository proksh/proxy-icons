import * as React from "react";
import { IconProps } from "./types";

export const ProVideoAddFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M1 4h16v5.131l6-4V18.87l-6-4V20H1zm7 12h2v-3h3v-2h-3V8H8v3H5v2h3z"
        />
      </svg>
    );
  },
);

export default ProVideoAddFill;
