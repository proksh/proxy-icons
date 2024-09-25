import * as React from "react";
import { IconProps } from "./types";

export const ProFolderChartFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H22v16H2zm11 14V9h-2v8zm4 0v-4h-2v4zm-8-5H7v5h2z"
        />
      </svg>
    );
  },
);

export default ProFolderChartFill;
