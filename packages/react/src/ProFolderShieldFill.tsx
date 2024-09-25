import * as React from "react";
import { IconProps } from "./types";

export const ProFolderShieldFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 13.5v-2.7h4v2.7a1 1 0 0 1-.465.844L12 15.316l-1.535-.972a1 1 0 0 1-.465-.845"
        />
        <path
          fill={color}
          d="M2 3h8.414l2 2H22v16H2zm14 5.8H8v4.7a3 3 0 0 0 1.395 2.534L12 17.684l2.605-1.65A3 3 0 0 0 16 13.499z"
        />
      </svg>
    );
  },
);

export default ProFolderShieldFill;
