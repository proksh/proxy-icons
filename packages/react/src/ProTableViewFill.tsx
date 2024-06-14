import * as React from "react";
import { IconProps } from "./types";

export const ProTableViewFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h5v5H2zm0 6v4h6v-4zm0 6v4l1 1h5v-5zm8 5h11l1-1v-4H10zm12-7v-4H10v4zm0-6V4l-1-1H10v5z"
        />
      </svg>
    );
  },
);

export default ProTableViewFill;
