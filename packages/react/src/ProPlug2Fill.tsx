import * as React from "react";
import { IconProps } from "./types";

export const ProPlug2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 6h-3V2h-2v4H9V2H7v4H4v3h16zm0 5H4v3a4 4 0 0 0 4 4h3v3l1 1h7v-2h-6v-2h3a4 4 0 0 0 4-4zm-6.5 4h-3v-2h3z"
        />
        <path fill={color} d="M11 2v3h2V2z" />
      </svg>
    );
  },
);

export default ProPlug2Fill;
