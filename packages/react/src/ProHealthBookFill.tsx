import * as React from "react";
import { IconProps } from "./types";

export const ProHealthBookFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5 3 1-1h14l1 1v18l-1 1H6l-1-1v-2H3v-2h2v-2H3v-2h2v-2H3V9h2V7H3V5h2zm7 13h2v-3h3v-2h-3V8h-2v3H9v2h3z"
        />
      </svg>
    );
  },
);

export default ProHealthBookFill;
