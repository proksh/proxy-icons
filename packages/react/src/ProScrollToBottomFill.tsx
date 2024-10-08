import * as React from "react";
import { IconProps } from "./types";

export const ProScrollToBottomFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 2a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6zm1 9V6h2v5zm-3.207 2.707 1.414-1.414L12 15.086l2.793-2.793 1.414 1.414L12 17.914z"
        />
      </svg>
    );
  },
);

export default ProScrollToBottomFill;
