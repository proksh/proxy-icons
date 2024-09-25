import * as React from "react";
import { IconProps } from "./types";

export const ProLayout5Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v18H2zm8 16h10v-9H10zm-2-9H4v9h4zm12-5H4v3h16z"
        />
      </svg>
    );
  },
);

export default ProLayout5Line;
