import * as React from "react";
import { IconProps } from "./types";

export const ProSuperscript2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.5 6a.5.5 0 0 1 .5-.5h.086a.414.414 0 0 1 .293.707l-2.63 2.629V10.5H21.5v-2h-1.586l.879-.879A2.414 2.414 0 0 0 19.086 3.5H19A2.5 2.5 0 0 0 16.5 6v.25h2zm-8 1.5H16v-3H2v3h5.5V20h3z"
        />
      </svg>
    );
  },
);

export default ProSuperscript2Fill;
