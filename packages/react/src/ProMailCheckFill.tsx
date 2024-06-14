import * as React from "react";
import { IconProps } from "./types";

export const ProMailCheckFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23.707 17.207 18 22.914l-3.707-3.707 1.414-1.414L18 20.086l4.293-4.293z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path fill={color} d="M22 3H2v1.009l10 7.727L22 4.01z" />
        <path
          fill={color}
          d="M2 21V6.536l10 7.728 10-7.727v6.72l-4 4-2.292-2.293-4.243 4.243L13.258 21z"
        />
        <path
          fill={color}
          d="m23.707 17.207-1.414-1.414L18 20.086l-2.292-2.293-1.415 1.414L18 22.914z"
        />
      </svg>
    );
  },
);

export default ProMailCheckFill;
