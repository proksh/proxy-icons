import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteBin3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7 3 1-1h8l1 1v1h5v2h-2v15l-1 1H5l-1-1V6H2V4h5zm2 14V9h2v8zm4 0V9h2v8z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProDeleteBin3Fill;
