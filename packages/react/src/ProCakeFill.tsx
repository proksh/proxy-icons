import * as React from "react";
import { IconProps } from "./types";

export const ProCakeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.5 4.445C13.5 5.304 12.828 6 12 6s-1.5-.696-1.5-1.555c0-.716.368-.954.74-1.195.378-.245.76-.493.76-1.25 1 .5 1.5 1.5 1.5 2.445M4 11l-1 1v8H1v2h22v-2h-2v-8l-1-1h-7V7h-2v4z"
        />
      </svg>
    );
  },
);

export default ProCakeFill;
