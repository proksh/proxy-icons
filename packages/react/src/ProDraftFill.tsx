import * as React from "react";
import { IconProps } from "./types";

export const ProDraftFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 2H3v20h18v-7.193l-4.842 4.842-3.811-.431-.431-3.811L21 6.322zM7 10V8h8v2zm5 4H7v-2h5z"
        />
        <path
          fill={color}
          d="m14.011 16.14 7.725-7.726 1.415 1.414-7.726 7.726-1.27-.144z"
        />
      </svg>
    );
  },
);

export default ProDraftFill;
