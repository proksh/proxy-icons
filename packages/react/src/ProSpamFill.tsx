import * as React from "react";
import { IconProps } from "./types";

export const ProSpamFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m8.125 2.692 7.717-.014 5.466 5.447.014 7.717-5.447 5.466-7.717.014-5.466-5.447-.014-7.717zM11 13V7h2v6zm0 4v-2h2v2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSpamFill;
