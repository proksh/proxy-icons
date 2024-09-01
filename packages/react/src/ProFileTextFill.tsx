import * as React from "react";
import { IconProps } from "./types";

export const ProFileTextFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h12.914L21 7.086V22H3zm5 7h3V7H8zm0 4h8v-2H8zm8 4v-2H8v2z"
        />
      </svg>
    );
  },
);

export default ProFileTextFill;
