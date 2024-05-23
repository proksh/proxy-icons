import * as React from "react";
import { IconProps } from "./types";

export const ProContractLeftFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 5v14H3.5V5zm2.324 6.263 6-5.5L16 6.5V11h5v2h-5v4.5l-1.676.737-6-5.5z"
        />
      </svg>
    );
  },
);

export default ProContractLeftFill;
