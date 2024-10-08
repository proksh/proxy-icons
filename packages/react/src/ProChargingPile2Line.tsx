import * as React from "react";
import { IconProps } from "./types";

export const ProChargingPile2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.25 7.5 5.5 12.818h2.25V16.5l3.75-5.318H9.25z"
        />
        <path
          fill={color}
          d="m3 4 1-1h9l1 1v8h3l1 1v5a1 1 0 1 0 2 0v-7l-1-1V8l1-1V4h2v3l1 1v2l-1 1v7a3 3 0 1 1-6 0v-4h-2v6l-1 1H4l-1-1zm2 1v14h7V5z"
        />
      </svg>
    );
  },
);

export default ProChargingPile2Line;
