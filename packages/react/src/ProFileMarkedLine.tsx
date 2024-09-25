import * as React from "react";
import { IconProps } from "./types";

export const ProFileMarkedLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 2v20H3V2zM7 4H5v16h14V4h-5v8.766l-3.5-2.1-3.5 2.1z"
        />
      </svg>
    );
  },
);

export default ProFileMarkedLine;
