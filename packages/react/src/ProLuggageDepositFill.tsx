import * as React from "react";
import { IconProps } from "./types";

export const ProLuggageDepositFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 4v2H4L3 7v12H1v2h22v-2h-2V7l-1-1h-4V4l-1-1H9zm6 1v1h-4V5zM8 19V8h2v11zm6 0V8h2v11z"
        />
      </svg>
    );
  },
);

export default ProLuggageDepositFill;
