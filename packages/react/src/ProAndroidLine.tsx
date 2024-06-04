import * as React from "react";
import { IconProps } from "./types";

export const ProAndroidLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        />
        <path
          fill={color}
          d="M6.382 3.968 4.707 2.293 3.293 3.707l1.675 1.675A8.96 8.96 0 0 0 3 11v11h18V11a8.96 8.96 0 0 0-1.968-5.618l1.675-1.675-1.414-1.414-1.675 1.675A8.96 8.96 0 0 0 12 2a8.96 8.96 0 0 0-5.618 1.968M12 4a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7M5 20v-7h14v7z"
        />
      </svg>
    );
  },
);

export default ProAndroidLine;
