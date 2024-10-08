import * as React from "react";
import { IconProps } from "./types";

export const ProMeteorFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 .882v12.149l-.066 1.062-.004.03a9 9 0 1 1-13.597-8.82l.002-.001L14 1.213v3.169zM7 13a5 5 0 1 0 10 0 5 5 0 0 0-10 0"
        />
      </svg>
    );
  },
);

export default ProMeteorFill;
