import * as React from "react";
import { IconProps } from "./types";

export const ProSortNumberDescFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4.553 4.106 3-1.5L9 3.5V11H7V5.118l-1.553.776zm12.74-.313-3.5 3.5L14.5 9H17v11h2V9h2.5l.707-1.707-3.5-3.5zM4.75 15.5a3.25 3.25 0 1 1 5.916 1.86L8.33 21H5.954l1.475-2.3a3.25 3.25 0 0 1-2.679-3.2M8 14.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        />
      </svg>
    );
  },
);

export default ProSortNumberDescFill;
