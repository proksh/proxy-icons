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
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="m7 3 1-1h8l1 1v1h5v2h-2v15l-1 1H5l-1-1V6H2V4h5zm2 14h2V9H9zm4 0h2V9h-2z"
        />
      </svg>
    );
  },
);

export default ProDeleteBin3Fill;
