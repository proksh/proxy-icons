import * as React from "react";
import { IconProps } from "./types";

export const ProSubscriptLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.575 4h-2.509L9.75 9.698 5.434 4h-2.51l5.571 7.354L2.703 19h2.509l4.538-5.99L14.288 19h2.51l-5.793-7.646zM20 15.25a.75.75 0 0 0-.75.75v.25h-1.5V16A2.25 2.25 0 0 1 20 13.75h.086a2.164 2.164 0 0 1 1.53 3.695l-1.305 1.305h1.939v1.5H18v-1.31l2.555-2.556a.665.665 0 0 0-.47-1.134z"
        />
      </svg>
    );
  },
);

export default ProSubscriptLine;
