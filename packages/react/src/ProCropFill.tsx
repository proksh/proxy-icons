import * as React from "react";
import { IconProps } from "./types";

export const ProCropFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 5V2h2v3h11l1 1v11h3v2h-3v3h-2v-3H6l-1-1V7H2V5z"
        />
      </svg>
    );
  },
);

export default ProCropFill;
