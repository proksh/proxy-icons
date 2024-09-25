import * as React from "react";
import { IconProps } from "./types";

export const ProSeparatorFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M1 13.5h3v-3H1zm17 0H6v-3h12zm5 0h-3v-3h3z" />
      </svg>
    );
  },
);

export default ProSeparatorFill;
