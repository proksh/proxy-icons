import * as React from "react";
import { IconProps } from "./types";

export const ProBriefcaseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7 2 1-1h8l1 1v3h4l1 1v14l-1 1H3l-1-1V6l1-1h4zm8 1H9v2h6zM4 15v4h16v-4zm9-4h-2v2h2z"
        />
      </svg>
    );
  },
);

export default ProBriefcaseFill;
