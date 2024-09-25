import * as React from "react";
import { IconProps } from "./types";

export const ProCommunityLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 7v2h2V7zm4 2V7h2v2zm0 2v2h2v-2zm0 6v-2h2v2z"
        />
        <path
          fill={color}
          d="M7 3 6 4v4.82l-3.625 2.9L2 12.5V20l1 1h18l1-1V4l-1-1zm1.625 4.72H8V5h12v14h-6v-6.5l-.375-.78zM4 12.98l4-3.2 4 3.2V19H9v-4H7v4H4z"
        />
      </svg>
    );
  },
);

export default ProCommunityLine;
