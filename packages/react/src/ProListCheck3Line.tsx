import * as React from "react";
import { IconProps } from "./types";

export const ProListCheck3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 5 1-1h5l1 1v5l-1 1H4l-1-1zm2 1v3h3V6zm16 0h-8V4h8zm-8 7h8v-2h-8zm8 7h-8v-2h8zm-15 .914 4.707-4.707-1.414-1.414L6 18.086l-1.793-1.793-1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProListCheck3Line;
