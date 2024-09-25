import * as React from "react";
import { IconProps } from "./types";

export const ProHealthBookLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 11V8h2v3h3v2h-3v3h-2v-3H9v-2z" />
        <path
          fill={color}
          d="m5 3 1-1h14l1 1v18l-1 1H6l-1-1v-2H3v-2h2v-2H3v-2h2v-2H3V9h2V7H3V5h2zm2 1v16h12V4z"
        />
      </svg>
    );
  },
);

export default ProHealthBookLine;
