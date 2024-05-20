import * as React from "react";
import { IconProps } from "./types";

export const ProCornerUpRightLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m17.086 12-3.793 3.793 1.414 1.414L20.914 11l-6.207-6.207-1.414 1.414L17.086 10H5v9h2v-7z"
        />
      </svg>
    );
  },
);

export default ProCornerUpRightLine;
