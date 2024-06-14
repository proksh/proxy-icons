import * as React from "react";
import { IconProps } from "./types";

export const ProTextSpacingFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M19 3.75H5v2.5h5.75V15h2.5V6.25H19z" />
        <path
          fill={color}
          d="m15 15 1.707-.707 3 3v1.414l-3 3L15 21v-2H9v2l-1.707.707-3-3v-1.414l3-3L9 15v2h6z"
        />
      </svg>
    );
  },
);

export default ProTextSpacingFill;
