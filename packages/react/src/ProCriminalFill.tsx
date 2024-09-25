import * as React from "react";
import { IconProps } from "./types";

export const ProCriminalFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 11a9 9 0 1 1 16.069 5.572 11 11 0 0 1 2.007 2.212l.857 1.25L12 22.02l-9.933-1.987.857-1.25a11 11 0 0 1 2.007-2.212A8.97 8.97 0 0 1 3 11m6 0c1.105 0 2-.672 2-1.5S10.105 8 9 8s-2 .672-2 1.5.895 1.5 2 1.5m3 5c1.38 0 2.5-.672 2.5-1.5S13.38 13 12 13s-2.5.672-2.5 1.5S10.62 16 12 16m5-6.5c0-.828-.895-1.5-2-1.5s-2 .672-2 1.5.895 1.5 2 1.5 2-.672 2-1.5"
        />
      </svg>
    );
  },
);

export default ProCriminalFill;
