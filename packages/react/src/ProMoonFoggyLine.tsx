import * as React from "react";
import { IconProps } from "./types";

export const ProMoonFoggyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.033 5.228A7 7 0 0 0 6.07 10H4.055a9.01 9.01 0 0 1 6.047-7.527l1.269 1.269a7 7 0 0 0 8.884 8.884l1.268 1.268A9.03 9.03 0 0 1 16 19.484v-2.161a7.03 7.03 0 0 0 2.768-2.36 9 9 0 0 1-9.736-9.736"
        />
        <path fill={color} d="M10 12H4v2h6zm-8 4h10v2H2zm12 4H7v2h7z" />
      </svg>
    );
  },
);

export default ProMoonFoggyLine;
