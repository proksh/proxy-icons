import * as React from "react";
import { IconProps } from "./types";

export const ProSubscript2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.5 6.5H16v-3H2v3h5.5V19h3zm8 9.5a.5.5 0 0 1 .5-.5h.086a.414.414 0 0 1 .293.707l-2.63 2.629V20.5H21.5v-2h-1.586l.879-.879a2.414 2.414 0 0 0-1.707-4.121H19a2.5 2.5 0 0 0-2.5 2.5v.25h2z"
        />
      </svg>
    );
  },
);

export default ProSubscript2Fill;
