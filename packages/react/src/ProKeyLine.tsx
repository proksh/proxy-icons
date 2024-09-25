import * as React from "react";
import { IconProps } from "./types";

export const ProKeyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 7a5 5 0 1 0 4.9 6H15v3h2v-3h1.5v4h2v-4H22v-2H10.9A5 5 0 0 0 6 7m-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        />
      </svg>
    );
  },
);

export default ProKeyLine;
