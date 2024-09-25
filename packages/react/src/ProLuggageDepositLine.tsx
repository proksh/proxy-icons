import * as React from "react";
import { IconProps } from "./types";

export const ProLuggageDepositLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 3 8 4v2H4L3 7v12H1v2h22v-2h-2V7l-1-1h-4V4l-1-1zm5 3h-4V5h4zm5 2v11h-3V8zm-9 11V8h4v11zM8 8v11H5V8z"
        />
      </svg>
    );
  },
);

export default ProLuggageDepositLine;
