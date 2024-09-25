import * as React from "react";
import { IconProps } from "./types";

export const ProFileMarkedFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M3 2h18v20H3zm4 2v8.766l3.5-2.1 3.5 2.1V4z" />
      </svg>
    );
  },
);

export default ProFileMarkedFill;
