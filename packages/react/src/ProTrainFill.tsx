import * as React from "react";
import { IconProps } from "./types";

export const ProTrainFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 3a4 4 0 0 0-4 4v13h3.586l-2 2h14.828l-2-2H21V7a4 4 0 0 0-4-4zM6 7h12v4H6zm8 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        />
      </svg>
    );
  },
);

export default ProTrainFill;
