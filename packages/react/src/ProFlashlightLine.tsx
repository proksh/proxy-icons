import * as React from "react";
import { IconProps } from "./types";

export const ProFlashlightLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.25.09V8.7h8.392L10.25 23.942V14.7H3.483zM7.016 12.7h5.234v4.758l4.608-6.758H10.25V7.31z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFlashlightLine;
