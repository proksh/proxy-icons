import * as React from "react";
import { IconProps } from "./types";

export const ProFlaskLine = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M9 8.782V4H8V2h8v2h-1v4.782l5.409 11.801-.91 1.417h-15l-.908-1.417zM13 4h-2v4h2zm-2.358 6L6.058 20h11.884l-4.584-10z"
        />
      </svg>
    );
  },
);

export default ProFlaskLine;
