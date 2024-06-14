import * as React from "react";
import { IconProps } from "./types";

export const ProListUnorderedLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m2 1h13V4H8zM4.5 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M21 13H8v-2h13zM8 20h13v-2H8zm-3.5-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
      </svg>
    );
  },
);

export default ProListUnorderedLine;
