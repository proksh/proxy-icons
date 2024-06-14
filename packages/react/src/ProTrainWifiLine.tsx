import * as React from "react";
import { IconProps } from "./types";

export const ProTrainWifiLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-1.63-.784A4.14 4.14 0 0 0 18.433 3.5 4.14 4.14 0 0 0 15.5 4.715l1.06 1.061A2.64 2.64 0 0 1 18.436 5c.731 0 1.394.297 1.874.776zm-1.6 1.598a1.88 1.88 0 0 0-1.335-.553c-.522 0-.994.212-1.336.553l1.336 1.336z"
        />
        <path
          fill={color}
          d="M13.022 5c.065-.715.266-1.39.578-2H7a4 4 0 0 0-4 4v13h3.586l-2 2h14.828l-2-2H21v-9.6a5.5 5.5 0 0 1-2 .578V18H5V7a2 2 0 0 1 2-2z"
        />
        <path
          fill={color}
          d="M18 10.978A5.5 5.5 0 0 1 13.207 7H6v4h12zM12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        />
      </svg>
    );
  },
);

export default ProTrainWifiLine;
