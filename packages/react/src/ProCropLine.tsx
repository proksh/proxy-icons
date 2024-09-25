import * as React from "react";
import { IconProps } from "./types";

export const ProCropLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 7v11l1 1h11v3h2v-3h3v-2h-3V6l-1-1H7V2H5v3H2v2zm2 0h10v10H7z"
        />
      </svg>
    );
  },
);

export default ProCropLine;
