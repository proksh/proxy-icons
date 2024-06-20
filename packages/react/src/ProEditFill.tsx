import * as React from "react";
import { IconProps } from "./types";

export const ProEditFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m16 1.67 4.243 4.243L8.229 17.926H3.986v-4.242zM4 22h16v-2H4z"
        />
      </svg>
    );
  },
);

export default ProEditFill;
