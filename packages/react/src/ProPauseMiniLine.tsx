import * as React from "react";
import { IconProps } from "./types";

export const ProPauseMiniLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 6v12h2V6zm8 0v12h2V6z" />
      </svg>
    );
  },
);

export default ProPauseMiniLine;
