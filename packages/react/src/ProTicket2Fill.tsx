import * as React from "react";
import { IconProps } from "./types";

export const ProTicket2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v7h-1a2 2 0 1 0 0 4h1v7H2v-7h1a2 2 0 1 0 0-4H2zm14 6H8v6h8z"
        />
      </svg>
    );
  },
);

export default ProTicket2Fill;
