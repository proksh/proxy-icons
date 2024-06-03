import * as React from "react";
import { IconProps } from "./types";

export const ProRepeatFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.293.793 7 1.5V4h15v8h-2V6H7v2.5l-1.707.707L1.086 5zM4 18v-6H2v8h15v2.5l1.707.707L22.914 19l-4.207-4.207L17 15.5V18z"
        />
      </svg>
    );
  },
);

export default ProRepeatFill;
