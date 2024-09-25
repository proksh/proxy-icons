import * as React from "react";
import { IconProps } from "./types";

export const ProFileEditLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 2H8.086L3 7.086V22h18v-7.193l-2 2V20H5V8h4V4h10v4.322l2-2z"
        />
        <path
          fill={color}
          d="m14.011 16.14 7.725-7.726 1.415 1.414-7.726 7.726-1.27-.144z"
        />
      </svg>
    );
  },
);

export default ProFileEditLine;
