import * as React from "react";
import { IconProps } from "./types";

export const ProLayout2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 3H3v18h8zm2 0v8h8V3zm8 10h-8v8h8z" />
      </svg>
    );
  },
);

export default ProLayout2Fill;
