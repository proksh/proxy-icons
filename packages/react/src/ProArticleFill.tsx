import * as React from "react";
import { IconProps } from "./types";

export const ProArticleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h18v20H3zm4 8V6h4v4zm10 4H7v-2h10zm-4-5h4V7h-4zm4 9H7v-2h10z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProArticleFill;
