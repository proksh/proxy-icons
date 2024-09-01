import * as React from "react";
import { IconProps } from "./types";

export const ProBillLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16 11H8V9h8zm-8 4h8v-2H8z" />
        <path fill={color} d="M3 2h18v20H3zm2 2v16h14V4z" />
      </svg>
    );
  },
);

export default ProBillLine;
