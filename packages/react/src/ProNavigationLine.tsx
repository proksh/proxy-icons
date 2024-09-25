import * as React from "react";
import { IconProps } from "./types";

export const ProNavigationLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5.001 5 4.312 14.014 2.808-6.381.512-.513 6.381-2.807zM3.784 2.535 22.169 8.19l.108 1.87-8.482 3.733-3.733 8.483-1.871-.108L2.534 3.784z"
        />
      </svg>
    );
  },
);

export default ProNavigationLine;
