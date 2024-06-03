import * as React from "react";
import { IconProps } from "./types";

export const ProMic2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5"
        />
        <path fill={color} d="M5 13a7 7 0 1 0 14 0h2a9 9 0 1 1-18 0z" />
      </svg>
    );
  },
);

export default ProMic2Fill;
