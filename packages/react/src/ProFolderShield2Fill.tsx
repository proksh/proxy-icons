import * as React from "react";
import { IconProps } from "./types";

export const ProFolderShield2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.414 3H2v18h11.297l-.4-.316A5 5 0 0 1 11 16.765V9h11V5h-9.586z"
        />
        <path
          fill={color}
          d="m14.139 19.116 3.361 2.66 3.361-2.66A3 3 0 0 0 22 16.763V11h-9v5.763a3 3 0 0 0 1.139 2.353"
        />
      </svg>
    );
  },
);

export default ProFolderShield2Fill;
