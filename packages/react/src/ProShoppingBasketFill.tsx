import * as React from "react";
import { IconProps } from "./types";

export const ProShoppingBasketFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 8a6 6 0 1 1 12 0v1h4v2h-1.095l-.91 9.1L19 21H5l-.995-.9-.91-9.1H2V9h4zm10 0a4 4 0 0 0-8 0v1h8zm-9 5v4h2v-4zm4 0v4h2v-4zm4 4h2v-4h-2z"
        />
      </svg>
    );
  },
);

export default ProShoppingBasketFill;
