import * as React from "react";
import { IconProps } from "./types";

export const ProSunFoggyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 4V1h2v3zm9 7h3v2h-3zM1 13h3v-2H1zm4.636-5.95L3.515 4.93l1.414-1.414 2.121 2.12zM19.07 3.515l-2.12 2.121 1.413 1.414 2.122-2.121zm-.707 13.435 2.122 2.121-1.415 1.414-2.12-2.121zM12 6a6 6 0 0 0-5.659 8H12v4a6 6 0 0 0 0-12"
        />
        <path fill={color} d="M10 16v2H2v-2zm5 4H6v2h9z" />
      </svg>
    );
  },
);

export default ProSunFoggyFill;
