import * as React from "react";
import { IconProps } from "./types";

export const ProBuildingFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3v16H1v2h22v-2h-2V9h-4v10h-2V3zm8 6H7V7h4zm0 4H7v-2h4z"
        />
      </svg>
    );
  },
);

export default ProBuildingFill;
