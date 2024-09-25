import * as React from "react";
import { IconProps } from "./types";

export const ProMicroscopeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m17.247 9.205-5-8.66-6.495 3.75 1.43 2.477A7.5 7.5 0 0 0 3 13.5c0 1.082.23 2.113.644 3.044A5 5 0 0 0 3 19c0 .91.244 1.764.67 2.5l.288.5H21v-2h-8.1a5 5 0 0 0-.026-2.12l8.112-4.506-.972-1.748-7.973 4.43A5 5 0 0 0 8 14c-1.05 0-2.023.323-2.827.875A5.51 5.51 0 0 1 8.185 8.51l2.567 4.446 2.492-1.438.899 1.498 1.715-1.03-.882-1.469z"
        />
      </svg>
    );
  },
);

export default ProMicroscopeFill;
