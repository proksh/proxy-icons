import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutLeft2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h20v18H2zm4 4v10h2V7z" />
      </svg>
    );
  },
);

export default ProLayoutLeft2Fill;
