import * as React from "react";
import { IconProps } from "./types";

export const ProCloudOffLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.98 20.981 20 23l1.414-1.414-19-19L1 4l3.84 3.84a7 7 0 0 0-.337 2.366A5.502 5.502 0 0 0 6 21h11.5q.243 0 .48-.019M16 19H6a3.5 3.5 0 0 1-.323-6.985l1.077-.099-.182-1.066a5 5 0 0 1-.05-1.327zm7.5-4a5.98 5.98 0 0 1-1.68 4.163l-1.414-1.414A4 4 0 0 0 17.5 11h-1v-1a5 5 0 0 0-7.91-4.067L7.162 4.505A7.001 7.001 0 0 1 18.44 9.073 6 6 0 0 1 23.5 15"
        />
      </svg>
    );
  },
);

export default ProCloudOffLine;
