import * as React from "react";
import { IconProps } from "./types";

export const ProH4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 21h2v-8h7v8h2V4h-2v7H4V4H2zM22 8h-2.172L14.5 16.718V18H20v3h2v-3h1.5v-2H22zm-2 8h-2.717L20 11.554z"
        />
      </svg>
    );
  },
);

export default ProH4Line;
