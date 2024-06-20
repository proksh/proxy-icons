import * as React from "react";
import { IconProps } from "./types";

export const ProHandbagLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M14 15v-2h-4v2z" />
        <path
          fill={color}
          d="M4 9h1a7 7 0 0 1 14 0h1l.996.91 1 11L21 22H3l-.996-1.09 1-11zm8-5a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5m-7.087 7-.818 9h15.81l-.818-9z"
        />
      </svg>
    );
  },
);

export default ProHandbagLine;
