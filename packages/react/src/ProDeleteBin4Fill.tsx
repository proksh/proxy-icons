import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteBin4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7 3 1-1h8l1 1v3h5v2h-2v13l-1 1H5l-1-1V8H2V6h5zm8 1H9v2h6zm-1.232 13.182L12 15.414l-1.768 1.768-1.414-1.414L10.586 14l-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14l1.768 1.768z"
        />
      </svg>
    );
  },
);

export default ProDeleteBin4Fill;
