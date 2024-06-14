import * as React from "react";
import { IconProps } from "./types";

export const ProListCheckLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3.5h3v3H3zM8 6h13V4H8zM6 17.5H3v3h3zM21 13H8v-2h13zM8 20h13v-2H8zm-2-9.5H3v3h3z"
        />
      </svg>
    );
  },
);

export default ProListCheckLine;
