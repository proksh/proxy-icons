import * as React from "react";
import { IconProps } from "./types";

export const ProPushpin2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 5h1v5.764l-1.895 3.789L6 16h5v7h2v-7h5l.868-1.496L17 11.234V5h1V3H6z"
        />
      </svg>
    );
  },
);

export default ProPushpin2Fill;
