import * as React from "react";
import { IconProps } from "./types";

export const ProCalculatorLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15 18v-6h2v6zm-4-6v2h2v-2zm-4 2v-2h2v2zm4 2v2h2v-2zm-4 2v-2h2v2zM17 6H7v4h10z"
        />
        <path fill={color} d="m3 3 1-1h16l1 1v18l-1 1H4l-1-1zm2 1v16h14V4z" />
      </svg>
    );
  },
);

export default ProCalculatorLine;
