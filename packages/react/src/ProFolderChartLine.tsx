import * as React from "react";
import { IconProps } from "./types";

export const ProFolderChartLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M17 17v-4h-2v4zm-4-8v8h-2V9zm-4 8v-5H7v5z" />
        <path
          fill={color}
          d="M10.414 3H2v18h20V5h-9.586zM4 19V5h5.586l2 2H20v12z"
        />
      </svg>
    );
  },
);

export default ProFolderChartLine;
