import * as React from "react";
import { IconProps } from "./types";

export const ProContractRightFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 5v14h2.5V5zm-2.324 6.263-6-5.5L8 6.5V11H3v2h5v4.5l1.676.737 6-5.5z"
        />
      </svg>
    );
  },
);

export default ProContractRightFill;
