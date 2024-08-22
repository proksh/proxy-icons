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
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M21 4h1V2H2v2h1v13h8v3H6v2h12v-2h-5v-3h8zm-6 5.5-5-3v6z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSlideshow2Fill;
