import * as React from "react";
import { IconProps } from "./types";

export const ProPlayReverseLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m19 3.5-1.493-.87-15 8.5v1.74l15 8.5L19 20.5zm-2 1.716v13.568L5.028 12z"
        />
      </svg>
    );
  },
);

export default ProPlayReverseLine;
