import * as React from "react";
import { IconProps } from "./types";

export const ProArtboardFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4 4 1-1h14l1 1v9l-1 1H5l-1-1zm17 11H3v2h5.586l-3.293 3.293 1.414 1.414L11 17.414V20h2v-2.586l4.293 4.293 1.414-1.414L15.414 17H21z"
        />
      </svg>
    );
  },
);

export default ProArtboardFill;
