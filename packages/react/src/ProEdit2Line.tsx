import * as React from "react";
import { IconProps } from "./types";

export const ProEdit2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m16.728.586 4.243 4.242L7.243 18.556H3v-4.242zm-2.829 5.657L5 15.143v1.413h1.414l8.9-8.9zm2.829 0 1.414-1.415-1.414-1.414-1.414 1.414zM21 22H3v-2h18z"
        />
      </svg>
    );
  },
);

export default ProEdit2Line;
