import * as React from "react";
import { IconProps } from "./types";

export const ProGalleryFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
        <path
          fill={color}
          d="M18 3h4v18H2V3h4V1h2v2h8V1h2zM4 5v7.054c3.037.222 5.712 1.107 7.663 2.378 1.98 1.29 3.118 2.903 3.309 4.568h2.009c-.162-2.106-1.342-3.96-3.09-5.41A8.96 8.96 0 0 1 19 12q.508 0 1 .055V5z"
        />
      </svg>
    );
  },
);

export default ProGalleryFill;
