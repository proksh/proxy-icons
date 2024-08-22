import * as React from "react";
import { IconProps } from "./types";

export const ProFoldersLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.414 3H6v4H2v14h16v-4h4V5h-6.586zM16 17H6V9H4v10h12zm-8-2V5h4.586l2 2H20v8z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFoldersLine;
