import * as React from "react";
import { IconProps } from "./types";

export const ProBriefcase2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7 2 1-1h8l1 1v3h4l1 1v14l-1 1H3l-1-1V6l1-1h4zm8 1H9v2h6zM4 12v7h16v-7h-3V9h-2v3H9V9H7v3z"
        />
      </svg>
    );
  },
);

export default ProBriefcase2Fill;
