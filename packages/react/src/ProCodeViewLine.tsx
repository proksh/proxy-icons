import * as React from "react";
import { IconProps } from "./types";

export const ProCodeViewLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.707 8.707 3.414 12l3.293 3.293-1.414 1.414L.586 12l4.707-4.707zm10.586 0L20.586 12l-3.293 3.293 1.414 1.414L23.415 12l-4.708-4.707z"
        />
      </svg>
    );
  },
);

export default ProCodeViewLine;
