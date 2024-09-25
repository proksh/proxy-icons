import * as React from "react";
import { IconProps } from "./types";

export const ProFileShredLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 2h11.516L20 7.124V12h2v2H2v-2h2zm2 10h12V8h-4V4H6zm-1 4v6H3v-6zm4 6v-6H7v6zm4-6v6h-2v-6zm4 6v-6h-2v6zm4-6v6h-2v-6z"
        />
      </svg>
    );
  },
);

export default ProFileShredLine;
