import * as React from "react";
import { IconProps } from "./types";

export const ProUploadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11.293 2.293-7 7L5 11h6v6h2v-6h6l.707-1.707-7-7zM3 21h18v-2H3z"
        />
      </svg>
    );
  },
);

export default ProUploadFill;
