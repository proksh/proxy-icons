import * as React from "react";
import { IconProps } from "./types";

export const ProCloudOffFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.98 20.981 20 23l1.414-1.414-19-19L1 4l3.84 3.84a7 7 0 0 0-.337 2.366A5.502 5.502 0 0 0 6 21h11.5q.243 0 .48-.019M23.5 15a5.98 5.98 0 0 1-1.68 4.164L7.162 4.506A7.001 7.001 0 0 1 18.44 9.073 6 6 0 0 1 23.5 15"
        />
      </svg>
    );
  },
);

export default ProCloudOffFill;
