import * as React from "react";
import { IconProps } from "./types";

export const ProEditCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m20.4 2-9.193 9.192v1.415h1.414l7.038-7.038 2.155-2.155z"
        />
        <path
          fill={color}
          d="m9.207 10.364 7.296-7.295A9.96 9.96 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.96 9.96 0 0 0-1.196-4.747l-7.354 7.354H9.207z"
        />
      </svg>
    );
  },
);

export default ProEditCircleFill;
