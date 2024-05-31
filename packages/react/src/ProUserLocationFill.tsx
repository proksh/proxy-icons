import * as React from "react";
import { IconProps } from "./types";

export const ProUserLocationFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7m1 7a5 5 0 0 0-5 5v3h11.51a12 12 0 0 1-1.182-1.6c-.342-.567-.828-1.51-.828-2.6a5.13 5.13 0 0 1 1.665-3.8z"
        />
        <path
          fill={color}
          d="m17.334 22.746.003.003.663.586.663-.587.003-.002.009-.008.028-.026a18 18 0 0 0 .462-.433c.294-.285.69-.686 1.087-1.14.395-.451.812-.977 1.136-1.514.305-.506.612-1.157.612-1.825 0-2.163-1.857-3.8-4-3.8s-4 1.637-4 3.8c0 .668.307 1.319.613 1.825.323.537.74 1.063 1.135 1.514a20 20 0 0 0 1.549 1.573l.028.026zM19.5 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
      </svg>
    );
  },
);

export default ProUserLocationFill;
