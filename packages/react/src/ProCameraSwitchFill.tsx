import * as React from "react";
import { IconProps } from "./types";

export const ProCameraSwitchFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.965 2h6.07l2 3H22v16H2V5h4.965zm-.91 6.666a5.502 5.502 0 0 0 6.25 8.828L13.3 15.75a3.5 3.5 0 0 1-4.797-3.128l1.8-.063zm7.89 7.668a5.502 5.502 0 0 0-6.25-8.828L10.7 9.25a3.5 3.5 0 0 1 4.797 3.128l-1.8.063z"
        />
      </svg>
    );
  },
);

export default ProCameraSwitchFill;
