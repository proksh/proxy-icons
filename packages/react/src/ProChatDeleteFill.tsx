import * as React from "react";
import { IconProps } from "./types";

export const ProChatDeleteFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm6.11 10.475 1.415 1.414L12 12.414l2.475 2.475 1.414-1.414L13.414 11l2.475-2.475-1.415-1.414L12 9.585 9.525 7.111 8.111 8.525 10.586 11z"
        />
      </svg>
    );
  },
);

export default ProChatDeleteFill;
