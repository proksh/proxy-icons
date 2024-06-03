import * as React from "react";
import { IconProps } from "./types";

export const ProBluetoothLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.79 2v7.099L7.692 5.167 6.308 6.61l5.037 4.834-5.037 4.835 1.384 1.442 4.098-3.931V22l1.729.684 5.21-5.556-.037-1.405-4.458-4.279 4.458-4.278-.043-1.482-5.21-4.445zm2 11.79 2.804 2.692-2.805 2.99zm0-4.691V4.167l2.72 2.321z"
        />
      </svg>
    );
  },
);

export default ProBluetoothLine;
