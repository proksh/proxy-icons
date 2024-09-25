import * as React from "react";
import { IconProps } from "./types";

export const ProShoppingBagFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 6v2H4L3 9v12l1 1h16l1-1V9l-1-1h-3V6A5 5 0 0 0 7 6m8 0v2H9V6a3 3 0 1 1 6 0m-8 6v-2h2v2zm8 0v-2h2v2z"
        />
      </svg>
    );
  },
);

export default ProShoppingBagFill;
