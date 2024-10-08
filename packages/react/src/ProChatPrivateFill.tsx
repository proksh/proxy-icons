import * as React from "react";
import { IconProps } from "./types";

export const ProChatPrivateFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M10 13v-1h4v1zm3-4v1h-2V9a1 1 0 1 1 2 0" />
        <path
          fill={color}
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm7 6v1H8v5h8v-5h-1V9a3 3 0 1 0-6 0"
        />
      </svg>
    );
  },
);

export default ProChatPrivateFill;
