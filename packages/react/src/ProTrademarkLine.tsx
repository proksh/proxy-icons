import * as React from "react";
import { IconProps } from "./types";

export const ProTrademarkLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 8H6v10H4V8H0V6h10zm2 10V6h2.189l3.311 5.15L20.811 6H23v12h-2V9.405l-3.5 5.444L14 9.405V18z"
        />
      </svg>
    );
  },
);

export default ProTrademarkLine;
