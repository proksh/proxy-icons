import * as React from "react";
import { IconProps } from "./types";

export const ProFilePaperLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h18v17a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2h16v2h2V4H5v11H3z"
        />
      </svg>
    );
  },
);

export default ProFilePaperLine;
