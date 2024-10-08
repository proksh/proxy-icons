import * as React from "react";
import { IconProps } from "./types";

export const ProTreasureMapFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9.038 1.9 6 3L22 2v17.167l-7.038 2.932-6-3L2 22V4.833zm8.255 12.807 1.414-1.414L17.414 12l1.293-1.293-1.414-1.414L16 10.586l-1.293-1.293-1.414 1.414L14.586 12l-1.293 1.293 1.414 1.414L16 13.414zM12 11h-2v2h2zm-6 0v2h2v-2z"
        />
      </svg>
    );
  },
);

export default ProTreasureMapFill;
