import * as React from "react";
import { IconProps } from "./types";

export const ProSlideshowViewFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h18l1 1v10H2zm0 12v4l1 1h5v-5zm8 5h4v-5h-4zm6 0h5l1-1v-4h-6z"
        />
      </svg>
    );
  },
);

export default ProSlideshowViewFill;
