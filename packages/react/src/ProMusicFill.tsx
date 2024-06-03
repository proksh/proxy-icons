import * as React from "react";
import { IconProps } from "./types";

export const ProMusicFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M20 3h-8v10.535A4 4 0 1 0 14 17V6h6z" />
      </svg>
    );
  },
);

export default ProMusicFill;
