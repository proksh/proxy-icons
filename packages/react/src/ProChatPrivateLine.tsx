import * as React from "react";
import { IconProps } from "./types";

export const ProChatPrivateLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 9v1H8v5h8v-5h-1V9a3 3 0 1 0-6 0m1 4v-1h4v1zm3-4v1h-2V9a1 1 0 1 1 2 0"
        />
        <path
          fill={color}
          d="M22 3H2v16h7.52L12 22.1l2.48-3.1H22zM4 17V5h16v12h-6.48L12 18.9 10.48 17z"
        />
      </svg>
    );
  },
);

export default ProChatPrivateLine;
