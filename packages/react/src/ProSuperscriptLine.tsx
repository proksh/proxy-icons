import * as React from "react";
import { IconProps } from "./types";

export const ProSuperscriptLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 5.25a.75.75 0 0 0-.75.75v.25h-1.5V6A2.25 2.25 0 0 1 21 3.75h.086a2.164 2.164 0 0 1 1.53 3.695L21.311 8.75h1.939v1.5H19V8.94l2.555-2.556a.664.664 0 0 0-.47-1.134zM16.575 5h-2.509L9.75 10.698 5.434 5h-2.51l5.571 7.354L2.703 20h2.509l4.538-5.99L14.288 20h2.51l-5.793-7.646z"
        />
      </svg>
    );
  },
);

export default ProSuperscriptLine;
