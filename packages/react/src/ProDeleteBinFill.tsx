import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteBinFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7 3 1-1h8l1 1v2h5v2H2V5h5zm8 1H9v1h6zM4 9l1-1h14l1 1v12l-1 1H5l-1-1zm5 9h2v-6H9zm4 0h2v-6h-2z"
        />
      </svg>
    );
  },
);

export default ProDeleteBinFill;
