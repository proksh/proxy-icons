import * as React from "react";
import { IconProps } from "./types";

export const ProBriefcase4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7 2 1-1h8l1 1v3h4l1 1v5h-7V9H9v2H2V6l1-1h4zm8 1H9v2h6zM2 13v7l1 1h18l1-1v-7h-7v2H9v-2zm9 0v-2h2v2z"
        />
      </svg>
    );
  },
);

export default ProBriefcase4Fill;
