import * as React from "react";
import { IconProps } from "./types";

export const ProMapLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9.038 1.9 6 3L22 2v17.167l-7.038 2.932-6-3L2 22V4.833zM4 6.168V19l5.038-2.1 6 3L20 17.834V5l-5.038 2.1-6-3z"
        />
      </svg>
    );
  },
);

export default ProMapLine;
