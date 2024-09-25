import * as React from "react";
import { IconProps } from "./types";

export const ProPlayLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5 3.5 1.493-.87 15 8.5v1.74l-15 8.5L5 20.5zm2 1.716v13.568L18.972 12z"
        />
      </svg>
    );
  },
);

export default ProPlayLine;
