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
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M6.923 3.206h10.154L22.155 12l-5.078 8.794H6.923L1.845 12zM11 13V7h2v6zm0 4v-2h2v2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSpam2Fill;
