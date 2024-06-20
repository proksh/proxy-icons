import * as React from "react";
import { IconProps } from "./types";

export const ProPencilFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m22.252 6.486-4.243-4.243-2.828 2.828 4.243 4.243zM3.574 16.678v4.243h4.243l10.192-10.193-4.242-4.242z"
        />
      </svg>
    );
  },
);

export default ProPencilFill;
