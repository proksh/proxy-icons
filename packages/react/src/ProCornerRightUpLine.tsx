import * as React from "react";
import { IconProps } from "./types";

export const ProCornerRightUpLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 6.914-3.793 3.793-1.414-1.414L13 3.086l6.207 6.207-1.414 1.414L14 6.914V19H5v-2h7z"
        />
      </svg>
    );
  },
);

export default ProCornerRightUpLine;
