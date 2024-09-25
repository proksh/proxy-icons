import * as React from "react";
import { IconProps } from "./types";

export const ProBuilding4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 2H3v18H1v2h22v-2h-2zM7 6h4v2H7zm0 4h4v2H7zm4 4v2H7v-2zm2-8h4v2h-4zm4 4v2h-4v-2zm-4 4h4v2h-4z"
        />
      </svg>
    );
  },
);

export default ProBuilding4Fill;
