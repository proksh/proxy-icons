import * as React from "react";
import { IconProps } from "./types";

export const ProChatNew2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M19 3V0h2v3h3v2h-3v3h-2V5h-3V3z" />
        <path
          fill={color}
          d="M1 3h13v2H3v12h6.48L11 18.9l1.52-1.9H19v-7h2v9h-7.52L11 22.1 8.52 19H1z"
        />
      </svg>
    );
  },
);

export default ProChatNew2Line;
