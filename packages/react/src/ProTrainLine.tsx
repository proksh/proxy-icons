import * as React from "react";
import { IconProps } from "./types";

export const ProTrainLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 7h12v4H6z" />
        <path
          fill={color}
          d="M7 3a4 4 0 0 0-4 4v13h3.586l-2 2h14.828l-2-2H21V7a4 4 0 0 0-4-4zm12 15H5V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
        />
      </svg>
    );
  },
);

export default ProTrainLine;
