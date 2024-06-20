import * as React from "react";
import { IconProps } from "./types";

export const ProShoppingBasketLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 13v4h2v-4zm4 0v4h2v-4zm4 4v-4h2v4z" />
        <path
          fill={color}
          d="M12 2a6 6 0 0 1 6 6v1h4v2h-1.095l-.91 9.1L19 21H5l-.995-.9-.91-9.1H2V9h4V8a6 6 0 0 1 6-6m4 7V8a4 4 0 0 0-8 0v1zM5.105 11l.8 8h12.19l.8-8z"
        />
      </svg>
    );
  },
);

export default ProShoppingBasketLine;
