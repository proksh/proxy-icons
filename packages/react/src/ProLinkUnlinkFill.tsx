import * as React from "react";
import { IconProps } from "./types";

export const ProLinkUnlinkFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.132 3.868a7.5 7.5 0 0 0-10.607 0L8.268 5.125l2.121 2.122 1.257-1.257a4.5 4.5 0 1 1 6.364 6.364l-1.257 1.257 2.122 2.12 1.257-1.256a7.5 7.5 0 0 0 0-10.607M5.99 11.646l1.257-1.257-2.122-2.121-1.257 1.257a7.5 7.5 0 0 0 10.607 10.607l1.257-1.257-2.121-2.122-1.258 1.257a4.5 4.5 0 0 1-6.363-6.364"
        />
        <path
          fill={color}
          d="m14.475 7.404-7.071 7.07 2.121 2.122 7.071-7.07zM16.5 16.5H22v3h-2.5V22h-3zM4.5 2v2.5H2v3h5.5V2z"
        />
      </svg>
    );
  },
);

export default ProLinkUnlinkFill;
