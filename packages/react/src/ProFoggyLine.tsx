import * as React from "react";
import { IconProps } from "./types";

export const ProFoggyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g fill={color} clipPath="url(#a)">
          <path d="M15.733 7.384A5 5 0 0 0 6 9l.002.923-.892.098A3.5 3.5 0 0 0 2.036 13H.022a5.5 5.5 0 0 1 4.024-4.805 7.001 7.001 0 0 1 13.281-2.193L17.5 6a6.5 6.5 0 0 1 6.495 6.755Q24 12.877 24 13h-2q0-.099-.005-.196l-.002-.047.002-.047q.005-.105.005-.21a4.5 4.5 0 0 0-5.172-4.45l-.825.123zM4 19h17v2H4zm20-4H0v2h24z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill={color} d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ProFoggyLine;
