import * as React from "react";
import { IconProps } from "./types";

export const ProCornerLeftUpLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 6.914 3.793 3.793 1.414-1.414L11 3.086 4.793 9.293l1.414 1.414L10 6.914V19h9v-2h-7z"
        />
      </svg>
    );
  },
);

export default ProCornerLeftUpLine;
