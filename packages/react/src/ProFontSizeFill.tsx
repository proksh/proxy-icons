import * as React from "react";
import { IconProps } from "./types";

export const ProFontSizeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.093 15.5 3.24 20H0L6.613 3.929h2.774L16.004 20H12.76l-1.853-4.5zm1.235-3h3.344L8 8.44zM24 11h-3v.256a4.5 4.5 0 1 0 0 8.488V20h3zm-4.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    );
  },
);

export default ProFontSizeFill;
