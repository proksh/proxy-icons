import * as React from "react";
import { IconProps } from "./types";

export const ProBaseStationFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.282 2.782A9.47 9.47 0 0 0 2.5 9.5a9.47 9.47 0 0 0 2.948 6.88l1.38-1.449A7.48 7.48 0 0 1 4.5 9.5c0-2.071.84-3.946 2.197-5.303z"
        />
        <path
          fill={color}
          d="M8.11 5.61A5.48 5.48 0 0 0 6.5 9.5c0 1.567.655 2.981 1.707 3.983l1.38-1.449A3.5 3.5 0 0 1 8.5 9.5a3.5 3.5 0 0 1 1.025-2.475zM21.5 9.5a9.47 9.47 0 0 1-2.948 6.88l-1.38-1.449A7.48 7.48 0 0 0 19.5 9.5c0-2.071-.84-3.946-2.197-5.303l1.414-1.415A9.47 9.47 0 0 1 21.5 9.5"
        />
        <path
          fill={color}
          d="M17.5 9.5a5.48 5.48 0 0 1-1.707 3.983l-1.38-1.449A3.5 3.5 0 0 0 15.5 9.5a3.5 3.5 0 0 0-1.025-2.475l1.414-1.414a5.48 5.48 0 0 1 1.61 3.889M7.168 20.445l4-6h1.664l4 6L16 22H8zM12 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
      </svg>
    );
  },
);

export default ProBaseStationFill;
