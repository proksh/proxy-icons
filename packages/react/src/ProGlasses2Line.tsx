import * as React from "react";
import { IconProps } from "./types";

export const ProGlasses2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 2H2L1 3v11.5h.025a5 5 0 1 0 9.926-.203A2 2 0 0 1 12 14c.385 0 .744.109 1.05.297Q13 14.642 13 15a5 5 0 1 0 9.975-.5H23V3l-1-1h-3v2h2v7a4.98 4.98 0 0 0-3-1c-1.806 0-3.39.958-4.268 2.393A4 4 0 0 0 12 12c-.62 0-1.208.141-1.732.393A5 5 0 0 0 6 10a4.98 4.98 0 0 0-3 1V4h2zm1 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6m9 3a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        />
      </svg>
    );
  },
);

export default ProGlasses2Line;
