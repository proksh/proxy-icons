import * as React from "react";
import { IconProps } from "./types";

export const ProSkipLeftFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 6v12h2V6zm4.793 6.707 5.5 5.5L18 17.5v-11l-1.707-.707-5.5 5.5z"
        />
      </svg>
    );
  },
);

export default ProSkipLeftFill;
