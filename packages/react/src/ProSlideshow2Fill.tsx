import * as React from "react";
import { IconProps } from "./types";

export const ProSlideshow2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 4v13h-8v3h5v2H6v-2h5v-3H3V4H2V2h20v2zm-6 5.5-5-3v6z"
        />
      </svg>
    );
  },
);

export default ProSlideshow2Fill;
