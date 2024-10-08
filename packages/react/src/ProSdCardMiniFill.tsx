import * as React from "react";
import { IconProps } from "./types";

export const ProSdCardMiniFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m6 3 1-1h12l1 1v18l-1 1H5l-1-1v-8.5l.22-.625L6 9.65zm3 2v4h2V5zm3 0v4h2V5zm3 4h2V5h-2z"
        />
      </svg>
    );
  },
);

export default ProSdCardMiniFill;
