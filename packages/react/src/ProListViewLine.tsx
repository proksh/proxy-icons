import * as React from "react";
import { IconProps } from "./types";

export const ProListViewLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 9h-8V7h8zM6 9h2V7H6zm12 4h-8v-2h8zM6 13h2v-2H6zm12 4h-8v-2h8zM6 17h2v-2H6z"
        />
        <path fill={color} d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm2 1v14h16V5z" />
      </svg>
    );
  },
);

export default ProListViewLine;
