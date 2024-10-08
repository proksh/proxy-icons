import * as React from "react";
import { IconProps } from "./types";

export const ProBillFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M3 2v20h18V2zm13 9H8V9h8zm0 4H8v-2h8z" />
      </svg>
    );
  },
);

export default ProBillFill;
