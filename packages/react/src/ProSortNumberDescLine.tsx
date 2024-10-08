import * as React from "react";
import { IconProps } from "./types";

export const ProSortNumberDescLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4.553 4.106 3-1.5L9 3.5V11H7V5.118l-1.553.776zm9.24 3.687L18 3.586l4.207 4.207-1.414 1.414L19 7.414V20.5h-2V7.414l-1.793 1.793zM4.75 15.5a3.25 3.25 0 1 1 5.916 1.86L8.33 21H5.954l1.475-2.3a3.25 3.25 0 0 1-2.679-3.2M8 14.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        />
      </svg>
    );
  },
);

export default ProSortNumberDescLine;
