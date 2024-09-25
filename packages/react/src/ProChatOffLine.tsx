import * as React from "react";
import { IconProps } from "./types";

export const ProChatOffLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m18 19 3 3 1.414-1.414-20-20L1 2l1 1v16h7.52L12 22.1l2.48-3.1zm-2-2h-2.48L12 18.9 10.48 17H4V5zm6-14v14.343l-2-2V5H9.657l-2-2z"
        />
      </svg>
    );
  },
);

export default ProChatOffLine;
