import * as React from "react";
import { IconProps } from "./types";

export const ProChatVideoFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm5 5v6h7v-2.25L17 14V8l-3 2.25V8z"
        />
      </svg>
    );
  },
);

export default ProChatVideoFill;
