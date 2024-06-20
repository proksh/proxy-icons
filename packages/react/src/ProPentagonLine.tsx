import * as React from "react";
import { IconProps } from "./types";

export const ProPentagonLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 .764 10.686 7.764-4.082 12.562H5.395L1.313 8.528zM3.665 9.292l3.183 9.798h10.303l3.184-9.798L12 3.236z"
        />
      </svg>
    );
  },
);

export default ProPentagonLine;
