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
          d="m7 3 1-1h8l1 1v2h5v2H2V5h5zm8 1v1H9V4zM4 9l1-1h14l1 1v12l-1 1H5l-1-1zm5 9v-6h2v6zm4 0v-6h2v6z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProDeleteBinFill;
