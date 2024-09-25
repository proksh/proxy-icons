import * as React from "react";
import { IconProps } from "./types";

export const ProXrpFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.778 4h-2.837l-4.49 4.371a3.52 3.52 0 0 1-2.451.99 3.52 3.52 0 0 1-2.452-.99L5.062 4h-2.84L8.13 9.754c2.14 2.083 5.607 2.083 7.745 0zM2.223 20H5.05l4.508-4.385a3.5 3.5 0 0 1 2.443-.985c.914 0 1.792.354 2.443.985L18.952 20h2.826l-5.92-5.761c-2.132-2.073-5.585-2.073-7.715 0z"
        />
      </svg>
    );
  },
);

export default ProXrpFill;
