import * as React from "react";
import { IconProps } from "./types";

export const ProInboxFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 3H2v18h20zm-2 9h-4.901l-.194.75a3.002 3.002 0 0 1-5.81 0L8.9 12H4V5h16z"
        />
      </svg>
    );
  },
);

export default ProInboxFill;
