import * as React from "react";
import { IconProps } from "./types";

export const ProUmbrellaFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 3.045C18.607 3.55 23 8.262 23 14c0-1.105-1.567-2-3.5-2s-3.5.895-3.5 2c0-.932-1.275-1.715-3-1.937V19a1 1 0 1 0 2 0v-2h2v2a3 3 0 1 1-6 0v-6.937c-1.725.222-3 1.005-3 1.937 0-1.105-1.567-2-3.5-2S1 12.895 1 14C1 8.262 5.394 3.55 11 3.045V2h2z"
        />
      </svg>
    );
  },
);

export default ProUmbrellaFill;
