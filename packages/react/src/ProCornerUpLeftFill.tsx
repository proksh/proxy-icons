import * as React from "react";
import { IconProps } from "./types";

export const ProCornerUpLeftFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11 16.5-1.707.707-5.5-5.5v-1.414l5.5-5.5L11 5.5V10h8v9h-2v-7h-6z"
        />
      </svg>
    );
  },
);

export default ProCornerUpLeftFill;
