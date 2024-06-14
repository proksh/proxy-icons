import * as React from "react";
import { IconProps } from "./types";

export const ProTyphoonLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8.5c-2.03 0-4 1.404-4 3.5s1.97 3.5 4 3.5 4-1.404 4-3.5-1.97-3.5-4-3.5M10 12c0-.665.717-1.5 2-1.5s2 .835 2 1.5-.717 1.5-2 1.5-2-.835-2-1.5"
        />
        <path
          fill={color}
          d="M5.072 6.682C3.774 8.134 3 9.912 3 12c0 3.63 2.658 6.569 6.198 7.602L6 22a24 24 0 0 0 3.72-.29c3.733-.591 7.137-2.078 9.208-4.392C20.226 15.866 21 14.088 21 12c0-3.63-2.658-6.569-6.198-7.602L18 2c-1.252 0-2.503.097-3.72.29-3.733.591-7.137 2.077-9.208 4.392M5 12c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6-7-2.807-7-6"
        />
      </svg>
    );
  },
);

export default ProTyphoonLine;
