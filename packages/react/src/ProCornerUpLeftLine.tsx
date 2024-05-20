import * as React from "react";
import { IconProps } from "./types";

export const ProCornerUpLeftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m6.914 12 3.793 3.793-1.414 1.414L3.086 11l6.207-6.207 1.414 1.414L6.914 10H19v9h-2v-7z"
        />
      </svg>
    );
  },
);

export default ProCornerUpLeftLine;
