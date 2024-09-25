import * as React from "react";
import { IconProps } from "./types";

export const ProColorFilterLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.85 9.653A6 6 0 1 1 12 19.469a6 6 0 1 1-5.85-9.816 6 6 0 1 1 11.7 0M12 4.315a4 4 0 0 0-.56 7.96 6 6 0 0 1 4.37-2.736A4 4 0 0 0 12 4.315m4.499 7.185q-.25 0-.493.03a4 4 0 0 0-2.894 1.843 6 6 0 0 1 .363 2.682 6 6 0 0 1-.363 1.572A4 4 0 1 0 16.5 11.5zm-8.674 1.124a6 6 0 0 1-.886-1.085 4 4 0 1 0 4.37 2.737 5.98 5.98 0 0 1-3.484-1.652"
        />
      </svg>
    );
  },
);

export default ProColorFilterLine;
