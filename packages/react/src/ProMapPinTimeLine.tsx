import * as React from "react";
import { IconProps } from "./types";

export const ProMapPinTimeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 11V6h-2v7h6v-2z" />
        <path
          fill={color}
          d="M12 23.836a54 54 0 0 0 1.949-1.796 49 49 0 0 0 2.809-2.98c1.02-1.186 2.063-2.537 2.856-3.895C20.392 13.83 21 12.373 21 11a9 9 0 1 0-18 0c0 1.373.608 2.831 1.386 4.165.793 1.358 1.835 2.709 2.856 3.894a49 49 0 0 0 2.81 2.98A53 53 0 0 0 12 23.835M5 11a7 7 0 0 1 14 0c0 .836-.392 1.92-1.114 3.157-.707 1.212-1.665 2.46-2.644 3.597A47 47 0 0 1 12 21.14a48 48 0 0 1-3.242-3.385c-.98-1.137-1.937-2.385-2.644-3.597C5.392 12.92 5 11.837 5 11"
        />
      </svg>
    );
  },
);

export default ProMapPinTimeLine;
