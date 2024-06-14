import * as React from "react";
import { IconProps } from "./types";

export const ProMapPinLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        />
        <path
          fill={color}
          d="m11.335 23.247.665.588.665-.588q.18-.162.358-.326a49 49 0 0 0 3.735-3.862c1.02-1.185 2.063-2.536 2.856-3.894C20.392 13.83 21 12.373 21 11a9 9 0 1 0-18 0c0 1.373.608 2.831 1.386 4.165.793 1.358 1.835 2.709 2.856 3.894a49 49 0 0 0 4.093 4.188M5 11a7 7 0 0 1 14 0c0 .836-.392 1.92-1.114 3.157-.707 1.212-1.665 2.46-2.644 3.597A47 47 0 0 1 12 21.14a48 48 0 0 1-3.242-3.385c-.98-1.137-1.937-2.385-2.644-3.597C5.392 12.92 5 11.837 5 11"
        />
      </svg>
    );
  },
);

export default ProMapPinLine;
