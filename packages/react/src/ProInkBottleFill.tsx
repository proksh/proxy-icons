import * as React from "react";
import { IconProps } from "./types";

export const ProInkBottleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7 4 1-1h8l1 1v4H7zm2 1v1h6V5zm8.303 4H6.697L3 11.465V22h18V11.465zM20 14v5H8v-5z"
        />
      </svg>
    );
  },
);

export default ProInkBottleFill;
