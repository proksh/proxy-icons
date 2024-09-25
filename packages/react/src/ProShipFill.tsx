import * as React from "react";
import { IconProps } from "./types";

export const ProShipFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 1h-4v2H5L4 4v6.185l-1.267.351-.692 1.246L3.87 18H4c1.277 0 2.47-.34 3.5-.936l.5-.29.5.29A6.96 6.96 0 0 0 12 18c1.277 0 2.47-.34 3.5-.936l.5-.29.5.29A6.96 6.96 0 0 0 20 18h.58l1.397-6.283-.709-1.18L20 10.184V4l-1-1h-5zm4 4v4.629l-6-1.667L6 9.63V5zm-6 15c-1.277 0-2.47-.34-3.5-.936l-.5-.29-.5.29A6.96 6.96 0 0 1 4 20H2v2h2a9 9 0 0 0 4-.936c1.206.6 2.565.936 4 .936a9 9 0 0 0 4-.936c1.206.6 2.565.936 4 .936h2v-2h-2c-1.277 0-2.47-.34-3.5-.936l-.5-.29-.5.29A6.96 6.96 0 0 1 12 20"
        />
      </svg>
    );
  },
);

export default ProShipFill;
