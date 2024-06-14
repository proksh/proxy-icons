import * as React from "react";
import { IconProps } from "./types";

export const ProFocusModeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 3H3v5h2V5h3zm8 2h3v3h2V3h-5zM5 16v3h3v2H3v-5zm14 0v3h-3v2h5v-5z"
        />
        <path fill={color} d="M18 6H6v12h12z" />
      </svg>
    );
  },
);

export default ProFocusModeFill;
