import * as React from "react";
import { IconProps } from "./types";

export const ProSignpostFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 5h-5V2h-2v3H4L3 6v8l1 1h13l.707-.293L22.414 10l-4.707-4.707zm-7 12v5h2v-5z"
        />
      </svg>
    );
  },
);

export default ProSignpostFill;
