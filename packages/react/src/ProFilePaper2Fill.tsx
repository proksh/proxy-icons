import * as React from "react";
import { IconProps } from "./types";

export const ProFilePaper2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 2 3 3v12h16v4h-2v-2H1v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7h2V5a3 3 0 0 0-3-3z"
        />
      </svg>
    );
  },
);

export default ProFilePaper2Fill;
