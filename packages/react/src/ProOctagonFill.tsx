import * as React from "react";
import { IconProps } from "./types";

export const ProOctagonFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.859 2.685H8.142L2.686 8.142v7.716l5.456 5.457h7.717l5.456-5.457V8.142z"
        />
      </svg>
    );
  },
);

export default ProOctagonFill;
