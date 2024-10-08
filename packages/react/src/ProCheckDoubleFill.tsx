import * as React from "react";
import { IconProps } from "./types";

export const ProCheckDoubleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m15.79 5.94 2.117 2.117-5.157 5.157-2.118-2.117zM3.16 10.69l2.826 2.824-.004.004 3.236 3.235L7.1 18.871l-6.06-6.06z"
        />
        <path
          fill={color}
          d="m12.75 18.871 10.81-10.81-2.12-2.122-8.69 8.69-3.94-3.94-2.12 2.122z"
        />
      </svg>
    );
  },
);

export default ProCheckDoubleFill;
