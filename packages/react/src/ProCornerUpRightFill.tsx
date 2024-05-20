import * as React from "react";
import { IconProps } from "./types";

export const ProCornerUpRightFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m13 16.5 1.707.707 5.5-5.5v-1.414l-5.5-5.5L13 5.5V10H5v9h2v-7h6z"
        />
      </svg>
    );
  },
);

export default ProCornerUpRightFill;
