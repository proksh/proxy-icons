import * as React from "react";
import { IconProps } from "./types";

export const ProMindMapFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 3h-9v2H8L7 6v3H2v6h5v3l1 1h4v2h9v-6h-9v2H9v-2h2V9H9V7h3v2h9z"
        />
      </svg>
    );
  },
);

export default ProMindMapFill;
