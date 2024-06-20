import * as React from "react";
import { IconProps } from "./types";

export const ProBrush2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m21.838 7.11-4.95-4.949-3.535 3.536-3.182-3.182L1.686 11v1.414l9.899 9.9h1.414l8.486-8.486-3.182-3.182zm-8.485 1.415 3.536-3.536 2.12 2.122-3.535 3.535 3.182 3.182-2.121 2.122L8.05 7.464l2.121-2.121zm-9.546 3.182 2.828-2.828 8.486 8.485-2.829 2.828z"
        />
      </svg>
    );
  },
);

export default ProBrush2Line;
