import * as React from "react";
import { IconProps } from "./types";

export const ProTaxiWifiFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-1.63-.784A4.14 4.14 0 0 0 18.433 3.5 4.14 4.14 0 0 0 15.5 4.715l1.06 1.061A2.64 2.64 0 0 1 18.436 5c.731 0 1.394.297 1.874.776zm-1.6 1.598a1.88 1.88 0 0 0-1.335-.553c-.522 0-.994.212-1.336.553l1.336 1.336z"
        />
        <path
          fill={color}
          d="M13 5.5c0-.9.216-1.75.6-2.5H9v2H5.406L2 11.245V22h3v-2h14v2h3V11H4.412l2.182-4h6.613A5.5 5.5 0 0 1 13 5.5m-4 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
      </svg>
    );
  },
);

export default ProTaxiWifiFill;
