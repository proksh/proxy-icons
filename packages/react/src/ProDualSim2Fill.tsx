import * as React from "react";
import { IconProps } from "./types";

export const ProDualSim2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m15.207 2.293 4.5 4.5L20 7.5V21l-1 1H5l-1-1V3l1-1h9.5zM11 11.5a1 1 0 1 1 2 0c0 .38-.077.455-.13.505-.13.125-.423.29-1.15.534l-.448.112A3 3 0 0 0 9 15.561V17h6v-2h-3.827a1 1 0 0 1 .585-.409l.485-.12.073-.022c.746-.249 1.446-.529 1.938-1 .573-.549.746-1.226.746-1.949a3 3 0 1 0-6 0z"
        />
      </svg>
    );
  },
);

export default ProDualSim2Fill;
