import * as React from "react";
import { IconProps } from "./types";

export const ProBarcodeBoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 7h3v10H6zm12 0h-3v10h3zm-5 0h1v10h-1zm-1 0h-2v10h2z"
        />
        <path fill={color} d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm2 1v14h16V5z" />
      </svg>
    );
  },
);

export default ProBarcodeBoxLine;
