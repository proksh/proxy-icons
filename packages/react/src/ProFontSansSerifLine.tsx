import * as React from "react";
import { IconProps } from "./types";

export const ProFontSansSerifLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.72 21v-.816L8 19.44V5.448l-2.28-.336V4.2h12.504l.24 4.248h-.744l-2.088-3.096h-5.328v6.456h6.072v1.368h-6.072v6.576l2.28.36V21z"
        />
      </svg>
    );
  },
);

export default ProFontSansSerifLine;
