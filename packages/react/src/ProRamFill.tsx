import * as React from "react";
import { IconProps } from "./types";

export const ProRamFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m1 6 1-1h20l1 1v12l-1 1h-3v-4h-2v4h-2v-4h-2v4h-2v-4H9v4H7v-4H5v4H2l-1-1zm4 3v3h6V9zm8 0v3h6V9z"
        />
      </svg>
    );
  },
);

export default ProRamFill;
