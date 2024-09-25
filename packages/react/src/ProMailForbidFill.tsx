import * as React from "react";
import { IconProps } from "./types";

export const ProMailForbidFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h20v1.01l-10 7.726L2 4.01z" />
        <path
          fill={color}
          d="M2 6.536V21h10.359A6.5 6.5 0 0 1 22 12.94V6.537l-10 7.727z"
        />
        <path
          fill={color}
          d="M13.5 18.25a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m4.75-2.75a2.75 2.75 0 0 0-2.65 3.486l3.386-3.386a2.8 2.8 0 0 0-.736-.1m2.348 1.317-3.781 3.78a2.75 2.75 0 0 0 3.78-3.78"
        />
      </svg>
    );
  },
);

export default ProMailForbidFill;
