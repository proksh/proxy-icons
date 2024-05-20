import * as React from "react";
import { IconProps } from "./types";

export const ProSpam3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8 13h8v-2H8z" />
        <path
          fill={color}
          d="m21.186 7.9-5.457-5.456H8.012L2.556 7.901v7.716l5.456 5.457h7.717l5.457-5.457zm-16.63.83L8.84 4.443h6.06l4.285 4.285v6.06L14.9 19.074H8.84l-4.285-4.285z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSpam3Line;
