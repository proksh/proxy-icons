import * as React from "react";
import { IconProps } from "./types";

export const ProOilLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m12 2 1-1h5l1 1v2h-7zM8 12v6h2v-6z" />
        <path
          fill={color}
          d="M8.191 5.412 9 5h10l1 1v15l-1 1H5l-1-1v-9.5l.191-.588zM9.51 7 6 11.825V20h12V7z"
        />
      </svg>
    );
  },
);

export default ProOilLine;
