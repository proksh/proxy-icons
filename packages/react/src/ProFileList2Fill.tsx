import * as React from "react";
import { IconProps } from "./types";

export const ProFileList2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h18v20H3zm5 7h8V7H8zm0 4h8v-2H8zm5 4v-2H8v2z"
        />
      </svg>
    );
  },
);

export default ProFileList2Fill;
