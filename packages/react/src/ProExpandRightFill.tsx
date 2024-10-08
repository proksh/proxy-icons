import * as React from "react";
import { IconProps } from "./types";

export const ProExpandRightFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 5v14H3.5V5zm14.176 6.263-6-5.5L12.5 6.5V11H8v2h4.5v4.5l1.676.737 6-5.5z"
        />
      </svg>
    );
  },
);

export default ProExpandRightFill;
