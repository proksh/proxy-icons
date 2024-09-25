import * as React from "react";
import { IconProps } from "./types";

export const ProChatNew2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.5 10V6.5H14V3H1v16h7.52L11 22.1l2.48-3.1H21v-9z"
        />
      </svg>
    );
  },
);

export default ProChatNew2Fill;
