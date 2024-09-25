import * as React from "react";
import { IconProps } from "./types";

export const ProFullscreenExitFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.5 3v3.5H2v3h6.5V3zm0 18v-3.5H2v-3h6.5V21zm13-3.5V21h-3v-6.5H22v3zm0-14.5v3.5H22v3h-6.5V3z"
        />
      </svg>
    );
  },
);

export default ProFullscreenExitFill;
