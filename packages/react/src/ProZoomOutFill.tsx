import * as React from "react";
import { IconProps } from "./types";

export const ProZoomOutFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19 10.5a8.47 8.47 0 0 1-2.01 5.49L22 21l-1.414 1.414-5.06-5.059A8.5 8.5 0 1 1 19 10.5m-12 1h7v-2H7z"
        />
      </svg>
    );
  },
);

export default ProZoomOutFill;
