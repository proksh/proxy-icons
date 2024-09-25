import * as React from "react";
import { IconProps } from "./types";

export const ProRamLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5 9h6v3H5zm14 0h-6v3h6z" />
        <path
          fill={color}
          d="m1 6 1-1h20l1 1v12l-1 1H2l-1-1zm18 11h2V7H3v10h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2z"
        />
      </svg>
    );
  },
);

export default ProRamLine;
