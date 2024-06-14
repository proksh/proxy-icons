import * as React from "react";
import { IconProps } from "./types";

export const ProH1Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 21h2v-8h7v8h2V4h-2v7H4V4H2zM19.293 8.293l-3 3 1.414 1.414L19 11.414V21h2V9z"
        />
      </svg>
    );
  },
);

export default ProH1Line;
