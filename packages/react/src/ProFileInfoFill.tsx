import * as React from "react";
import { IconProps } from "./types";

export const ProFileInfoFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2v20h18V7.086L15.914 2zm10 5v2h-2V7zm0 4v6h-2v-6z"
        />
      </svg>
    );
  },
);

export default ProFileInfoFill;
