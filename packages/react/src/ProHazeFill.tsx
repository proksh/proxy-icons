import * as React from "react";
import { IconProps } from "./types";

export const ProHazeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 1v3h2V1zm12 10h-3v2h3zM4 13H1v-2h3zm8-7a6 6 0 0 0-5.917 7h11.834q.083-.489.083-1a6 6 0 0 0-6-6m-1 9h11v2H11zm-9 2h7v-2H2zm2 4v-2h10v2zm16 0v-2h-4v2zM5.636 7.05 3.515 4.93l1.414-1.414 2.121 2.12zM19.07 3.515l-2.12 2.121 1.413 1.414 2.122-2.121z"
        />
      </svg>
    );
  },
);

export default ProHazeFill;
