import * as React from "react";
import { IconProps } from "./types";

export const ProDraftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M3 2h18v4.322l-2 2V4H5v16h14v-3.193l2-2V22H3z" />
        <path
          fill={color}
          d="M16 10H8V8h8zm-8 4h5v-2H8zm6.011 2.14 7.725-7.726 1.415 1.414-7.726 7.726-1.27-.144z"
        />
      </svg>
    );
  },
);

export default ProDraftLine;
