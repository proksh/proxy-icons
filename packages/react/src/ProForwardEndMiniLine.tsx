import * as React from "react";
import { IconProps } from "./types";

export const ProForwardEndMiniLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 7v10h2V7zM2 8l1.496-.868 7 4v1.736l-7 4L2 16zm2 6.277L7.984 12 4 9.723zM11 8l1.496-.868 7 4v1.736l-7 4L11 16zm2 6.277L16.984 12 13 9.723z"
        />
      </svg>
    );
  },
);

export default ProForwardEndMiniLine;
