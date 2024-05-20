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
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M9.401 2.5H14.6l8.066 15.056-2.63 3.944H3.965l-2.63-3.944zM11 13.5v-6h2v6zm0 4v-2h2v2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProAlertFill;
