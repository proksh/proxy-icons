import * as React from "react";
import { IconProps } from "./types";

export const ProPoliceCarFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 3h-3v2h-2V3H8v2H5.397l-3.165 6H0v2l2 .667V22h3v-2h14v2h3v-8.333L24 13v-2h-2.232l-3.165-6H16zm1.397 4 2.11 4H4.493l2.11-4zM6 17a1 1 0 0 1-1-1v-2c2.355 0 4.094.925 4.733 2.048.273.48-.18.952-.733.952zm12 0h-3c-.552 0-1.006-.472-.733-.952C14.906 14.925 16.645 14 19 14v2a1 1 0 0 1-1 1"
        />
      </svg>
    );
  },
);

export default ProPoliceCarFill;
