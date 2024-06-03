import * as React from "react";
import { IconProps } from "./types";

export const ProVidicon2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 2h9l1 1v3h2v4.132l6-4v13.737l-6-4V20H1V6h12V4H5zm0 10h2v-2H5z"
        />
      </svg>
    );
  },
);

export default ProVidicon2Fill;
