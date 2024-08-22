import * as React from "react";
import { IconProps } from "./types";

export const ProPingPongFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m6.119 18.852.64.446.026-.027a9.52 9.52 0 0 0 9.43 0l2.357 2.357h1.414l2.121-2.122v-1.414l-2.357-2.357a9.52 9.52 0 0 0 0-9.429l.027-.027-.446-.64A9.5 9.5 0 1 0 6.119 18.852m12.15-11.065L8.266 17.79a7.52 7.52 0 0 0 6.468 0l-1.82-1.82 3.536-3.535 1.82 1.82a7.52 7.52 0 0 0 0-6.468m-2.526 8.184.707-.707 3.536 3.535-.707.707z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProPingPongFill;
