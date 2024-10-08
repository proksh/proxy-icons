import * as React from "react";
import { IconProps } from "./types";

export const ProMeteorLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        />
        <path
          fill={color}
          d="M21 13.03V.883l-7 3.5v-3.17L7.335 5.302l-.002.001a9 9 0 1 0 13.597 8.82l.004-.03zm-9-5.412 7-3.5v8.851l-.058.937A7.002 7.002 0 0 1 5 13a7 7 0 0 1 3.373-5.989L12 4.787z"
        />
      </svg>
    );
  },
);

export default ProMeteorLine;
