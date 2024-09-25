import * as React from "react";
import { IconProps } from "./types";

export const ProCodeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.56 6.56 8.44 4.44.879 12l7.56 7.56 2.122-2.12L5.12 12zm2.88 0 2.12-2.12L23.121 12l-7.56 7.56-2.122-2.12L18.88 12z"
        />
      </svg>
    );
  },
);

export default ProCodeFill;
