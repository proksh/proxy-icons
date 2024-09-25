import * as React from "react";
import { IconProps } from "./types";

export const ProArtboardLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 3 4 4v9l1 1h14l1-1V4l-1-1zm1 9V5h12v7zm15 3H3v2h5.586l-3.293 3.293 1.414 1.414L11 17.414V20h2v-2.586l4.293 4.293 1.414-1.414L15.414 17H21z"
        />
      </svg>
    );
  },
);

export default ProArtboardLine;
