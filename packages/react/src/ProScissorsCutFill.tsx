import * as React from "react";
import { IconProps } from "./types";

export const ProScissorsCutFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.557 4.148a3 3 0 0 1 4.242 0L9.61 16.338a4 4 0 1 1-2.25-1.992l2.273-2.273-2.206-2.205A4 4 0 1 1 9.64 7.839l2.113 2.113zM8.027 6.12a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
        />
        <path
          fill={color}
          d="m13.168 15.61 4.494 4.494a3 3 0 0 0 4.243 0l-6.616-6.616zM2 11h2v2H2zm6 0H6v2h2zm8 0h2v2h-2zm6 0h-2v2h2z"
        />
      </svg>
    );
  },
);

export default ProScissorsCutFill;
