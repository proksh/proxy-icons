import * as React from "react";
import { IconProps } from "./types";

export const ProHaze2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6 6.867c.268-.323.593-.693.955-1.065.514-.528 1.127-1.083 1.784-1.513.64-.42 1.424-.789 2.26-.789a5 5 0 0 1 0 10c-.835 0-1.62-.37-2.26-.789-.657-.43-1.27-.985-1.784-1.513A18 18 0 0 1 12 13.633a19 19 0 0 1-.955 1.065c-.514.527-1.127 1.083-1.784 1.513-.64.42-1.425.789-2.261.789A5 5 0 0 1 7 7c.836 0 1.622.37 2.261.789.657.43 1.27.985 1.784 1.513.362.372.686.742.955 1.065M4.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9-18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9-18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M19.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
      </svg>
    );
  },
);

export default ProHaze2Fill;
