import * as React from "react";
import { IconProps } from "./types";

export const ProGlassesFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 7a5 5 0 1 0 4.456 2.729A2 2 0 0 1 12 9c.622 0 1.178.284 1.544.729a5 5 0 1 0 1.264-1.578A4 4 0 0 0 12 7a4 4 0 0 0-2.808 1.151A4.98 4.98 0 0 0 6 7"
        />
      </svg>
    );
  },
);

export default ProGlassesFill;
