import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteBin2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7 3 1-1h8l1 1v3h5v2h-2v13l-1 1H5l-1-1V8H2V6h5zm8 1v2H9V4zM9 17v-6h2v6zm4 0v-6h2v6z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProDeleteBin2Fill;
