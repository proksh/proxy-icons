import * as React from "react";
import { IconProps } from "./types";

export const ProBracesFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 2.5A3.5 3.5 0 0 0 3.5 6v4a.5.5 0 0 1-.5.5H2v3h1a.5.5 0 0 1 .5.5v4A3.5 3.5 0 0 0 7 21.5h2v-3H7a.5.5 0 0 1-.5-.5v-4c0-.744-.232-1.433-.627-2a3.5 3.5 0 0 0 .627-2V6a.5.5 0 0 1 .5-.5h2v-3zM20.5 6A3.5 3.5 0 0 0 17 2.5h-2v3h2a.5.5 0 0 1 .5.5v4c0 .744.232 1.433.627 2a3.5 3.5 0 0 0-.627 2v4a.5.5 0 0 1-.5.5h-2v3h2a3.5 3.5 0 0 0 3.5-3.5v-4a.5.5 0 0 1 .5-.5h1v-3h-1a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    );
  },
);

export default ProBracesFill;
