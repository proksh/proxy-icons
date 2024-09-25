import * as React from "react";
import { IconProps } from "./types";

export const ProFolderShieldLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 8.8H8v4.7a3 3 0 0 0 1.395 2.534L12 17.684l2.605-1.65A3 3 0 0 0 16 13.499zm-6 4.7v-2.7h4v2.7a1 1 0 0 1-.465.844L12 15.317l-1.535-.973A1 1 0 0 1 10 13.5"
        />
        <path
          fill={color}
          d="M10.414 3H2v18h20V5h-9.586zM4 19V5h5.586l2 2H20v12z"
        />
      </svg>
    );
  },
);

export default ProFolderShieldLine;
