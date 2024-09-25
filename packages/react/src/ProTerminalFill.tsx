import * as React from "react";
import { IconProps } from "./types";

export const ProTerminalFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.94 6.56 7.378 12l-5.44 5.44 2.122 2.12L11.62 12 4.06 4.44zM11 21.5h10v-3H11z"
        />
      </svg>
    );
  },
);

export default ProTerminalFill;
