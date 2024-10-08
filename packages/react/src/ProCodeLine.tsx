import * as React from "react";
import { IconProps } from "./types";

export const ProCodeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.207 6.207 8.793 4.793 1.586 12l7.207 7.207 1.414-1.414L4.414 12zm3.586 0 1.414-1.414L22.414 12l-7.207 7.207-1.414-1.414L19.586 12z"
        />
      </svg>
    );
  },
);

export default ProCodeLine;
