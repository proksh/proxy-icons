import * as React from "react";
import { IconProps } from "./types";

export const ProFileTransferFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2v20h18V7.086L15.914 2zm9.004 8.75V8L16 12.01 12.004 16v-2.75H8v-2.5z"
        />
      </svg>
    );
  },
);

export default ProFileTransferFill;
