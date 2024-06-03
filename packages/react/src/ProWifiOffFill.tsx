import * as React from "react";
import { IconProps } from "./types";

export const ProWifiOffFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.637 16.637 19 20l1.414-1.414-17-17L2 3l1.914 1.914A18 18 0 0 0 .477 7.172l1.92 2.304a15 15 0 0 1 3.777-2.302L7.72 8.72a13 13 0 0 0-4.043 2.292l1.92 2.305a9.96 9.96 0 0 1 4.57-2.15L12 13a7.97 7.97 0 0 0-5.121 1.854l1.92 2.305A4.98 4.98 0 0 1 12 16a4.98 4.98 0 0 1 3.201 1.159zm2.765-3.319a10 10 0 0 0-1.414-.987l-4.314-4.314a12.94 12.94 0 0 1 7.649 2.996zM12 6a15 15 0 0 0-1.288.055L8.084 3.427A18 18 0 0 1 12 3c4.384 0 8.402 1.567 11.524 4.172l-1.92 2.304A14.94 14.94 0 0 0 12 6"
        />
        <path
          fill={color}
          d="M13.92 18.695A3 3 0 0 0 12 18c-.73 0-1.4.261-1.92.695L12 21z"
        />
      </svg>
    );
  },
);

export default ProWifiOffFill;
