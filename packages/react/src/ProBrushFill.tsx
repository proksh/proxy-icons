import * as React from "react";
import { IconProps } from "./types";

export const ProBrushFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m18.745 11.557 4.029-4.924-.067-1.34-3-3-1.332-.074-5 4 .017.022A7.5 7.5 0 0 0 4 13.5c0 1.585-1.133 2.719-2.196 3.781L.748 18.338l1.358.582c.662.284 2.355.8 4.086 1.238C7.905 20.59 9.856 21 11 21q.117 0 .234-.009.132.009.266.009a7.5 7.5 0 0 0 7.245-9.443m-3.297-4.435 3.477-2.782 1.728 1.727L17.845 9.5a7.54 7.54 0 0 0-2.397-2.377"
        />
      </svg>
    );
  },
);

export default ProBrushFill;
