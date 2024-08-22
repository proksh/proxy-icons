import * as React from "react";
import { IconProps } from "./types";

export const ProFileShredFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.516 2H4v10H2v2h20v-2h-2V7.124zM5 16v6H3v-6zm4 6v-6H7v6zm4-6v6h-2v-6zm4 6v-6h-2v6zm4-6v6h-2v-6z"
        />
      </svg>
    );
  },
);

export default ProFileShredFill;
