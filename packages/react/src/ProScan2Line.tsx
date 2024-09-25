import * as React from "react";
import { IconProps } from "./types";

export const ProScan2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.865 6.865a8 8 0 1 0 3.306-2.35l-1.52-1.522A9.96 9.96 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.96 9.96 0 0 1 2.446-6.553q.659-.76 1.456-1.373l7.512 7.512L12 13 8.716 9.716a4 4 0 1 0 4.006-1.651l-1.941-1.941a6 6 0 1 1-3.494 2.163z"
        />
      </svg>
    );
  },
);

export default ProScan2Line;
