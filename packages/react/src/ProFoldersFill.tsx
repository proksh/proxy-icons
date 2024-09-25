import * as React from "react";
import { IconProps } from "./types";

export const ProFoldersFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.414 3H6v4H2v14h16v-4h4V5h-6.586zM6 9v8h10v2H4V9z"
        />
      </svg>
    );
  },
);

export default ProFoldersFill;
