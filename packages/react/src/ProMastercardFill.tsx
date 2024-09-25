import * as React from "react";
import { IconProps } from "./types";

export const ProMastercardFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.001 6.654a6.79 6.79 0 0 1 2.596 5.344A6.79 6.79 0 0 1 12 17.34a6.79 6.79 0 0 1-2.596-5.343A6.79 6.79 0 0 1 12 6.653m-.87-.582A7.78 7.78 0 0 0 8.402 12a7.78 7.78 0 0 0 2.728 5.926 6.798 6.798 0 1 1 .003-11.854m1.742 11.854A7.78 7.78 0 0 0 15.602 12a7.78 7.78 0 0 0-2.73-5.928 6.798 6.798 0 1 1 .003 11.854"
        />
      </svg>
    );
  },
);

export default ProMastercardFill;
