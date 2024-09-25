import * as React from "react";
import { IconProps } from "./types";

export const ProBowlFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 2.803V.5H6v1.697l-1 1.5V6.5h2V4.303zM22 8H2v1c0 4.452 2.434 8.379 6 10.09V21h8v-1.91c3.566-1.711 6-5.638 6-10.09zM13.5.5v2.303l-1 1.5V6.5h-2V3.697l1-1.5V.5zM19 2.803V.5h-2v1.697l-1 1.5V6.5h2V4.303z"
        />
      </svg>
    );
  },
);

export default ProBowlFill;
