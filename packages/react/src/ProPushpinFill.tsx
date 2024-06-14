import * as React from "react";
import { IconProps } from "./types";

export const ProPushpinFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.667 10.318 14.18 1.833l-1.414 1.414.708.707L9.399 8.03 5.38 9.37l-.39 1.655 3.535 3.536-4.95 4.95 1.414 1.414 4.95-4.95 3.536 3.535 1.672-.444.99-3.632 4.409-4.409.706.707z"
        />
      </svg>
    );
  },
);

export default ProPushpinFill;
