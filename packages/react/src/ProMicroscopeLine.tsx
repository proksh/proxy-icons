import * as React from "react";
import { IconProps } from "./types";

export const ProMicroscopeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m17.248 9.205-5-8.66-6.496 3.75 1.43 2.477a7.5 7.5 0 0 0-3.538 9.772A5 5 0 0 0 3 19c0 .91.244 1.764.67 2.5l.288.5H21v-2h-8.1a5 5 0 0 0-.026-2.12l8.112-4.506-.972-1.748-7.973 4.43A5 5 0 0 0 8 14c-1.05 0-2.023.323-2.827.875A5.51 5.51 0 0 1 8.185 8.51l2.567 4.446 2.492-1.438.899 1.498 1.715-1.03-.882-1.468zM8.484 5.027l3.031-1.75 3 5.196-3.03 1.75zM5 19a3 3 0 1 1 5.83 1H5.17A3 3 0 0 1 5 19"
        />
      </svg>
    );
  },
);

export default ProMicroscopeLine;
