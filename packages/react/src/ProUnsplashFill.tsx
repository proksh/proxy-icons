import * as React from "react";
import { IconProps } from "./types";

export const ProUnsplashFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8.501 11v5h7v-5h5.5v10h-18V11zm7-8v5h-7V3z" />
      </svg>
    );
  },
);

export default ProUnsplashFill;
