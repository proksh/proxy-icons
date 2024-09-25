import * as React from "react";
import { IconProps } from "./types";

export const ProFontSansFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.406 21V4.09h11.075v2.918h-7.536v4.535h6.88v2.8h-6.88V21z"
        />
      </svg>
    );
  },
);

export default ProFontSansFill;
