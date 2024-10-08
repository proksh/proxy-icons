import * as React from "react";
import { IconProps } from "./types";

export const ProCloseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 14.121 4.596 4.597 2.122-2.122L14.12 12l4.597-4.596-2.122-2.122L12 9.88 7.404 5.282 5.282 7.404 9.88 12l-4.597 4.596 2.122 2.122z"
        />
      </svg>
    );
  },
);

export default ProCloseFill;
