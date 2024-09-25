import * as React from "react";
import { IconProps } from "./types";

export const ProFullscreenFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.5 9V5.5H8v-3H1.5V9zm0 6v3.5H8v3H1.5V15zm15 3.5V15h3v6.5H16v-3zm0-9.5V5.5H16v-3h6.5V9z"
        />
      </svg>
    );
  },
);

export default ProFullscreenFill;
