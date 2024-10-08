import * as React from "react";
import { IconProps } from "./types";

export const ProSuperscriptFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 5.5a.5.5 0 0 0-.5.5v.25h-2V6A2.5 2.5 0 0 1 20 3.5h.086a2.414 2.414 0 0 1 1.707 4.121l-.879.879H22.5v2h-4.75V8.836l2.629-2.629a.414.414 0 0 0-.293-.707zM17.123 5h-3.79L9.679 9.738 6.125 5h-3.75l5.402 7.203L1.762 20h3.79l4.093-5.306L13.625 20h3.75l-5.829-7.771z"
        />
      </svg>
    );
  },
);

export default ProSuperscriptFill;
