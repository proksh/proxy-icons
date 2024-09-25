import * as React from "react";
import { IconProps } from "./types";

export const ProWubiInputLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 3H4v2h5.302l-.91 5H5v2h3.029l-1.273 7H3v2h18v-2h-3v-9h-7.574l.909-5H20zm-9.938 9H16v7H8.79z"
        />
      </svg>
    );
  },
);

export default ProWubiInputLine;
