import * as React from "react";
import { IconProps } from "./types";

export const ProSpam2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.923 3.206h10.154L22.155 12l-5.078 8.794H6.923L1.845 12zM11 13h2V7h-2zm0 4h2v-2h-2z"
        />
      </svg>
    );
  },
);

export default ProSpam2Fill;
