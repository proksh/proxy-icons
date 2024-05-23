import * as React from "react";
import { IconProps } from "./types";

export const ProMickeyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.617 10.913A4.501 4.501 0 0 1 5.5 2a4.5 4.5 0 0 1 4.493 4.254A8 8 0 0 1 12 6c.693 0 1.365.088 2.007.254a4.5 4.5 0 1 1 5.376 4.66 8 8 0 1 1-14.766 0M3 6.5a2.5 2.5 0 1 1 4.924.615 8 8 0 0 0-2.158 1.871A2.5 2.5 0 0 1 3 6.5M18.5 4a2.5 2.5 0 0 0-2.424 3.115 8 8 0 0 1 2.158 1.871q.13.014.266.014a2.5 2.5 0 0 0 0-5M12 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProMickeyLine;
