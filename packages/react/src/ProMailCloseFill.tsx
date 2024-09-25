import * as React from "react";
import { IconProps } from "./types";

export const ProMailCloseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h20v1.01l-10 7.726L2 4.01z" />
        <path
          fill={color}
          d="M2 6.536V21h12.464l2-2-2.475-2.475 3.536-3.535L20 15.464l2-2V6.537l-10 7.727z"
        />
        <path
          fill={color}
          d="m20 17.586 2.122-2.121 1.414 1.414L21.415 19l2.12 2.121-1.413 1.415L20 20.414l-2.12 2.121-1.415-1.414L18.586 19l-2.121-2.121 1.414-1.415z"
        />
      </svg>
    );
  },
);

export default ProMailCloseFill;
