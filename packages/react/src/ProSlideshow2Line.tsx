import * as React from "react";
import { IconProps } from "./types";

export const ProSlideshow2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m15 9.5-5-3v6z" />
        <path
          fill={color}
          d="M22 4h-1v13h-8v3h5v2H6v-2h5v-3H3V4H2V2h20zM5 4h14v11H5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSlideshow2Line;
