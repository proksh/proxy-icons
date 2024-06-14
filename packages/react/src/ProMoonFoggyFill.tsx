import * as React from "react";
import { IconProps } from "./types";

export const ProMoonFoggyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path stroke={color} d="M12 17H2m12 4H7" strokeWidth="2" />
        <path
          fill={color}
          d="M4 10.996a9 9 0 0 1 6.102-8.523l1.269 1.269a7 7 0 0 0 8.884 8.884l1.268 1.268A9.03 9.03 0 0 1 16 19.484V18h-2v-4H4.513A9 9 0 0 1 4 10.996"
        />
        <path fill={color} d="M2 16h10v2H2zm12 4H7v2h7z" />
      </svg>
    );
  },
);

export default ProMoonFoggyFill;
