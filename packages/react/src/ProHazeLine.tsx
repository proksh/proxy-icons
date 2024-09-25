import * as React from "react";
import { IconProps } from "./types";

export const ProHazeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.636 7.05 3.515 4.93l1.414-1.414 2.121 2.12zM1 13v-2h3v2zm17-1q0 .511-.083 1h-2.043a4 4 0 1 0-7.748 0H6.083A6 6 0 1 1 18 12m5 1h-3v-2h3zM11 4V1h2v3zm8.07-.485-2.12 2.121 1.413 1.414 2.122-2.121zM9 17H2v-2h7zm2-2h11v2H11zm-7 4v2h10v-2zm12 2v-2h4v2z"
        />
      </svg>
    );
  },
);

export default ProHazeLine;
