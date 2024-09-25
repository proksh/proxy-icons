import * as React from "react";
import { IconProps } from "./types";

export const ProScales2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 3V2H4v2l1 1h6v2.062A8 8 0 0 0 4 15v7h16v-7a8 8 0 0 0-7-7.938V5h6l1-1V2h-2v1zm10 12a4 4 0 1 1-1.968-3.446l-2.739 2.739 1.414 1.414 2.74-2.739A4 4 0 0 1 16 15"
        />
      </svg>
    );
  },
);

export default ProScales2Fill;
