import * as React from "react";
import { IconProps } from "./types";

export const ProAlertFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9.5 2.5-8 15 2.5 4h16l2.5-4-8-15zm1.5 11v-6h2v6zm0 4v-2h2v2z"
        />
      </svg>
    );
  },
);

export default ProAlertFill;
