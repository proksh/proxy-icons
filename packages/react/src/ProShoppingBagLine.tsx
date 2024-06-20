import * as React from "react";
import { IconProps } from "./types";

export const ProShoppingBagLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1a5 5 0 0 0-5 5v2H4L3 9v12l1 1h16l1-1V9l-1-1h-3V6a5 5 0 0 0-5-5m3 9v2h2v-2h2v10H5V10h2v2h2v-2zm0-2H9V6a3 3 0 1 1 6 0z"
        />
      </svg>
    );
  },
);

export default ProShoppingBagLine;
