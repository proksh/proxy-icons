import * as React from "react";
import { IconProps } from "./types";

export const ProKeyboardFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 5h3v3H3zm0 6h3v3H3zm5 0h3v3H8zm8 0h-3v3h3zm2 0h3v3h-3zM3 19.5h18v-3H3zM11 5H8v3h3zm2 0h3v3h-3zm8 0h-3v3h3z"
        />
      </svg>
    );
  },
);

export default ProKeyboardFill;
