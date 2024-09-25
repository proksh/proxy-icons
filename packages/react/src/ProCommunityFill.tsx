import * as React from "react";
import { IconProps } from "./types";

export const ProCommunityFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 3 6 4v4.82l-3.625 2.9L2 12.5V20l1 1h18l1-1V4l-1-1zm5 6V7h2v2zm4 0V7h2v2zm0 2h2v2h-2zm0 6v-2h2v2zM4 12.98l4-3.2 4 3.2V19H9v-4H7v4H4z"
        />
      </svg>
    );
  },
);

export default ProCommunityFill;
