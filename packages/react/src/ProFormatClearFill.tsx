import * as React from "react";
import { IconProps } from "./types";

export const ProFormatClearFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m6.157 3.5 3 3H11.6l-.385 2.056 2.57 2.57.868-4.626H20v-3zm6.733 12.39L18 21l1.414-1.414-15-15L3 6l7.32 7.32L9.068 20h3.052z"
        />
      </svg>
    );
  },
);

export default ProFormatClearFill;
