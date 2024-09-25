import * as React from "react";
import { IconProps } from "./types";

export const ProFunctionFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3 3 4v6l1 1h6l1-1V4l-1-1zm10 10-1 1v6l1 1h6l1-1v-6l-1-1zM4 13l-1 1v6l1 1h6l1-1v-6l-1-1zM14 3l-1 1v6l1 1h6l1-1V4l-1-1z"
        />
      </svg>
    );
  },
);

export default ProFunctionFill;
