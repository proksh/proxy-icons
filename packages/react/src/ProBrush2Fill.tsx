import * as React from "react";
import { IconProps } from "./types";

export const ProBrush2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m16.889 2.161 4.95 4.95-3.536 3.535 3.182 3.182-8.486 8.486h-1.414l-9.9-9.9V11l8.486-8.485 3.182 3.182zm0 2.828-3.536 3.536-3.182-3.182L8.05 7.464l8.485 8.486 2.121-2.122-3.182-3.182 3.536-3.535z"
        />
      </svg>
    );
  },
);

export default ProBrush2Fill;
