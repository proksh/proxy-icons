import * as React from "react";
import { IconProps } from "./types";

export const ProMapPinAddLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 10V7h2v3h3v2h-3v3h-2v-3H8v-2z" />
        <path
          fill={color}
          d="M12 23.836a54 54 0 0 1-1.949-1.796 49 49 0 0 1-2.809-2.98c-1.02-1.186-2.063-2.537-2.856-3.895C3.608 13.83 3 12.373 3 11a9 9 0 0 1 18 0c0 1.373-.608 2.831-1.386 4.165-.793 1.358-1.835 2.709-2.856 3.894a49 49 0 0 1-2.81 2.98A54 54 0 0 1 12 23.836M12 4a7 7 0 0 0-7 7c0 .836.392 1.92 1.114 3.157.707 1.212 1.665 2.46 2.644 3.597A47 47 0 0 0 12 21.14a48 48 0 0 0 3.242-3.385c.98-1.137 1.937-2.385 2.644-3.597C18.608 12.92 19 11.837 19 11a7 7 0 0 0-7-7"
        />
      </svg>
    );
  },
);

export default ProMapPinAddLine;
