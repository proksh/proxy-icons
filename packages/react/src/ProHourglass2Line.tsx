import * as React from "react";
import { IconProps } from "./types";

export const ProHourglass2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4 3 1-1h14l1 1v3l-.35.76L13.538 12l6.114 5.24L20 18v3l-1 1H5l-1-1v-3l.35-.76L10.462 12 4.35 6.76 4 6zm8 7.683 6-5.143V4H6v1.54zm0 2.634L6 18.46V20h12v-1.54z"
        />
      </svg>
    );
  },
);

export default ProHourglass2Line;
