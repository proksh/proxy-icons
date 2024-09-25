import * as React from "react";
import { IconProps } from "./types";

export const ProWindowsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.001 2.5v19l-18-2v-15zm-2 10.499-7 .001v5.487l7 .779zm-14 4.71 5 .556V13l-5-.001zm14-6.71V4.735l-7 .777V11zm-9-5.265-5 .556V11l5 .001z"
        />
      </svg>
    );
  },
);

export default ProWindowsLine;
