import * as React from "react";
import { IconProps } from "./types";

export const ProUser2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10m0 12c-4.428 0-8.258 2.877-8.906 6.839L2.904 22h18.192l-.19-1.161C20.258 16.877 16.428 14 12 14"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProUser2Fill;
