import * as React from "react";
import { IconProps } from "./types";

export const ProCornerRightUpFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7.5 11-.707-1.707 5.5-5.5h1.414l5.5 5.5L18.5 11H14v8H5v-2h7v-6z"
        />
      </svg>
    );
  },
);

export default ProCornerRightUpFill;
