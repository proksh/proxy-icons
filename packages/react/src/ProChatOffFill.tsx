import * as React from "react";
import { IconProps } from "./types";

export const ProChatOffFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m18 19 3 3 1.414-1.414-20-20L1 2l1 1v16h7.52L12 22.1l2.48-3.1zm4-16v14.343L7.657 3z"
        />
      </svg>
    );
  },
);

export default ProChatOffFill;
