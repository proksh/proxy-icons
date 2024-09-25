import * as React from "react";
import { IconProps } from "./types";

export const ProBuildingLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 9H7V7h4zm-4 4h4v-2H7z" />
        <path
          fill={color}
          d="M15 3H3v16H1v2h22v-2h-2V9h-6zm0 8h4v8h-4zm-2-6v14H5V5z"
        />
      </svg>
    );
  },
);

export default ProBuildingLine;
