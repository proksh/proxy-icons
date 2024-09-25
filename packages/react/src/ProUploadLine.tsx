import * as React from "react";
import { IconProps } from "./types";

export const ProUploadLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4.293 9.293 1.414 1.414L11 5.414V17h2V5.414l5.293 5.293 1.414-1.414L12 1.586zM3 20.75h18v-2H3z"
        />
      </svg>
    );
  },
);

export default ProUploadLine;
