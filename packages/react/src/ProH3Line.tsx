import * as React from "react";
import { IconProps } from "./types";

export const ProH3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 21h2v-8h7v8h2V4h-2v7H4V4H2zM15.5 8.5H22v2.495l-2.28 2.534A3.75 3.75 0 0 1 19.25 21h-.75a4 4 0 0 1-4-4h2a2 2 0 0 0 2 2h.75a1.75 1.75 0 1 0 0-3.5H17.5l-.743-1.669 2.998-3.331H15.5z"
        />
      </svg>
    );
  },
);

export default ProH3Line;
