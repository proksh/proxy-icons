import * as React from "react";
import { IconProps } from "./types";

export const ProLayout4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 3h8v18h-8zm-2 0H3v8h8zM3 13v8h8v-8z" />
      </svg>
    );
  },
);

export default ProLayout4Fill;
