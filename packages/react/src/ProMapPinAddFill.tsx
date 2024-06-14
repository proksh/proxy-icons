import * as React from "react";
import { IconProps } from "./types";

export const ProMapPinAddFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 23.836a55 55 0 0 1-1.949-1.796 49 49 0 0 1-2.809-2.98c-1.02-1.186-2.063-2.537-2.856-3.895C3.608 13.83 3 12.373 3 11a9 9 0 0 1 18 0c0 1.373-.608 2.831-1.386 4.165-.793 1.358-1.835 2.709-2.856 3.894a49 49 0 0 1-2.81 2.98A55 55 0 0 1 12 23.836M11 15h2v-3h3v-2h-3V7h-2v3H8v2h3z"
        />
      </svg>
    );
  },
);

export default ProMapPinAddFill;
