import * as React from "react";
import { IconProps } from "./types";

export const ProWifiFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.477 7.172A17.93 17.93 0 0 1 12 3c4.384 0 8.402 1.567 11.524 4.172l-1.92 2.304A14.94 14.94 0 0 0 12 6a14.94 14.94 0 0 0-9.603 3.476zm19.846 3.84A12.95 12.95 0 0 0 12 8a12.95 12.95 0 0 0-8.322 3.013l1.92 2.305A9.96 9.96 0 0 1 12 11a9.96 9.96 0 0 1 6.402 2.318zm-3.201 3.842A7.97 7.97 0 0 0 12 13a7.97 7.97 0 0 0-5.121 1.854l1.92 2.305A4.98 4.98 0 0 1 12 16a4.98 4.98 0 0 1 3.201 1.159zm-3.201 3.841A3 3 0 0 0 12 18c-.731 0-1.401.261-1.921.695L12 21z"
        />
      </svg>
    );
  },
);

export default ProWifiFill;
