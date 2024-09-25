import * as React from "react";
import { IconProps } from "./types";

export const ProSeparatorLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 13h2v-2H2zm16 0H6v-2h12zm4 0h-2v-2h2z" />
      </svg>
    );
  },
);

export default ProSeparatorLine;
