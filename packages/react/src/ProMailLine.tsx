import * as React from "react";
import { IconProps } from "./types";

export const ProMailLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 3v18H2V3zM4 7.227V19h16V7.227l-8 7.111zM19.495 5H4.505L12 11.662z"
        />
      </svg>
    );
  },
);

export default ProMailLine;
