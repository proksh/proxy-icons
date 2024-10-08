import * as React from "react";
import { IconProps } from "./types";

export const ProColorFilterFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.127 7.688a4.873 4.873 0 1 1 9.477 1.6 6.87 6.87 0 0 0-5.174 3.24 4.877 4.877 0 0 1-4.303-4.84m9.992 3.569.165-.003h.002a4.873 4.873 0 1 1-4.174 7.39c.307-.78.476-1.628.476-2.517 0-.887-.169-1.736-.476-2.516a4.87 4.87 0 0 1 4.007-2.354m-7.779 2.77c.618.26 1.283.432 1.979.5.174.5.268 1.039.268 1.6a4.873 4.873 0 1 1-5.443-4.84 6.9 6.9 0 0 0 3.196 2.74"
        />
      </svg>
    );
  },
);

export default ProColorFilterFill;
