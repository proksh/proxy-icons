import * as React from "react";
import { IconProps } from "./types";

export const ProDirectionFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.293 12.707v-1.414l9.9-9.9h1.414l9.9 9.9v1.414l-9.9 9.9h-1.414zM12 8.5V10H9l-1 1v4h2v-3h2v1.5l1.707.707L16.914 11l-3.207-3.207z"
        />
      </svg>
    );
  },
);

export default ProDirectionFill;
