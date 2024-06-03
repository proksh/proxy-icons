import * as React from "react";
import { IconProps } from "./types";

export const ProPauseMiniFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M6.5 6v12h3V6zm8 0v12h3V6z" />
      </svg>
    );
  },
);

export default ProPauseMiniFill;
