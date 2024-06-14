import * as React from "react";
import { IconProps } from "./types";

export const ProBriefcase3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 1h8l1 1v3h4l1 1v14l-1 1H3l-1-1V6l1-1h4V2zm12 10V7h-3v4zm-5 0V7H9v4zm-8 0V7H4v4zm8-6V3H9v2z"
        />
      </svg>
    );
  },
);

export default ProBriefcase3Fill;
