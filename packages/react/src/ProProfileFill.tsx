import * as React from "react";
import { IconProps } from "./types";

export const ProProfileFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 9v2h2V9z" />
        <path
          fill={color}
          d="m1 4 1-1h20l1 1v16l-1 1H2l-1-1zm4 4v4l1 1h4l1-1V8l-1-1H6zm8-1v2h6V7zm6 4h-6v2h6zM5 15v2h14v-2z"
        />
      </svg>
    );
  },
);

export default ProProfileFill;
