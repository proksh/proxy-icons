import * as React from "react";
import { IconProps } from "./types";

export const ProSubscript2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 6h6V4H2v2h6v13h2zm8.25 10a.75.75 0 0 1 .75-.75h.086a.664.664 0 0 1 .47 1.134L17 18.939v1.311h4.25v-1.5h-1.94l1.306-1.305a2.164 2.164 0 0 0-1.53-3.695H19A2.25 2.25 0 0 0 16.75 16v.25h1.5z"
        />
      </svg>
    );
  },
);

export default ProSubscript2Line;
