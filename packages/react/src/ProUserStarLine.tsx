import * as React from "react";
import { IconProps } from "./types";

export const ProUserStarLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M10 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M5 7a5 5 0 1 1 10 0A5 5 0 0 1 5 7m13 5.5 1.693 3.67 4.013.476-2.967 2.744.788 3.964L18 21.38l-3.527 1.974.788-3.964-2.967-2.744 4.013-.476zm-5.824 3.153-.113.347H6a3 3 0 0 0-3 3v3H1v-3a5 5 0 0 1 5-5h8c.716 0 1.397.15 2.012.422l-.378.82z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProUserStarLine;
