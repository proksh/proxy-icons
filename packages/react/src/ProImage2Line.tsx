import * as React from "react";
import { IconProps } from "./types";

export const ProImage2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
        <path
          fill={color}
          d="M22 3H2v18h20zM11.068 16.482 8.582 19H4v-3.586l3-3zM20 5v10.721l-4.09-4.145-3.437 3.482L7 9.586l-3 3V5zm-8.608 14 4.517-4.576L20 18.568V19z"
        />
      </svg>
    );
  },
);

export default ProImage2Line;
