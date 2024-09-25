import * as React from "react";
import { IconProps } from "./types";

export const ProWubiInputFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 2.5H4v3h4.703l-.727 4H5v3h2.43l-1.09 6H3v3h18v-3h-2.5v-9h-7.475l.727-4H20zm-9.52 10h5.02v6H9.388z"
        />
      </svg>
    );
  },
);

export default ProWubiInputFill;
