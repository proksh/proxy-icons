import * as React from "react";
import { IconProps } from "./types";

export const ProDoorLockBoxFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm7 4.5v3h1v4h2v-4h1v-3z"
        />
      </svg>
    );
  },
);

export default ProDoorLockBoxFill;
