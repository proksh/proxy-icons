import * as React from "react";
import { IconProps } from "./types";

export const ProEqualizer2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.5 3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M12 8h9V6h-9zm0 8H3v2h9zm5.5-2.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
        />
      </svg>
    );
  },
);

export default ProEqualizer2Fill;
