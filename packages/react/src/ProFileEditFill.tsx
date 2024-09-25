import * as React from "react";
import { IconProps } from "./types";

export const ProFileEditFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 2h11v4.322l-9.084 9.085.431 3.81 3.811.432L21 14.807V22H3V9h6l1-1z"
        />
        <path
          fill={color}
          d="M8 2.086 3.086 7H8zm13.736 6.328-7.725 7.725.144 1.27 1.27.145 7.726-7.726z"
        />
      </svg>
    );
  },
);

export default ProFileEditFill;
