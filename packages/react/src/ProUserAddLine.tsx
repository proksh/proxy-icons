import * as React from "react";
import { IconProps } from "./types";

export const ProUserAddLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M5 19a3 3 0 0 1 3-3h5v-2H8a5 5 0 0 0-5 5v3h2zm13-2v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"
        />
      </svg>
    );
  },
);

export default ProUserAddLine;
