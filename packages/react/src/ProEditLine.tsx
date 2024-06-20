import * as React from "react";
import { IconProps } from "./types";

export const ProEditLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.243 5.913 16 1.67 3.986 13.684v4.242H8.23zM5.986 14.512 16 4.498l1.414 1.415L7.401 15.926H5.986zM4 22h16v-2H4z"
        />
      </svg>
    );
  },
);

export default ProEditLine;
