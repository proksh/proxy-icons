import * as React from "react";
import { IconProps } from "./types";

export const ProFunctionsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 20h14v-2H7.915l7.714-6-7.714-6H19V4H5v2.267L12.371 12 5 17.733z"
        />
      </svg>
    );
  },
);

export default ProFunctionsLine;
