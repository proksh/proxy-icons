import * as React from "react";
import { IconProps } from "./types";

export const ProMapFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m15.038 4.9-6-3L2 4.834V22l6.962-2.9 6 3L22 19.166V2z"
        />
      </svg>
    );
  },
);

export default ProMapFill;
