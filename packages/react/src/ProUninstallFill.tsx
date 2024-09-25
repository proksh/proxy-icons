import * as React from "react";
import { IconProps } from "./types";

export const ProUninstallFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15 17h2v2h-2z" />
        <path
          fill={color}
          d="M10.586 2 7.293 5.293 8 7h3v4h2V7h3l.707-1.707L13.414 2H20l1 1v18l-1 1H4l-1-1V3l1-1zM5 16v4h14v-4z"
        />
      </svg>
    );
  },
);

export default ProUninstallFill;
