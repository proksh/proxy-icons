import * as React from "react";
import { IconProps } from "./types";

export const ProShadowFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 2H2v16h4v4h16V6h-4zm0 7.086V8h2v3.086zm0 5v-2.172l2 2v2.172zM16.914 18H18v-1.086l2 2V20h-1.086zm-5 0h2.172l2 2h-2.172zM8 18h1.086l2 2H8z"
        />
      </svg>
    );
  },
);

export default ProShadowFill;
