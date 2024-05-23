import * as React from "react";
import { IconProps } from "./types";

export const ProExternalLinkFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m13 3-.707 1.707L15.086 7.5l-5.293 5.293 1.414 1.414L16.5 8.914l2.793 2.793L21 11V4l-1-1z"
        />
        <path fill={color} d="M4 6 3 7v13l1 1h13l1-1v-6h-2v5H5V8h5V6z" />
      </svg>
    );
  },
);

export default ProExternalLinkFill;
