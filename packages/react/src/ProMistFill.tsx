import * as React from "react";
import { IconProps } from "./types";

export const ProMistFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 6.5h13v-3H4zm15 0h3v-3h-3zm-17 5v-3h4v3zm6 0h3v-3H8zm12 0h-7v-3h7zm-16 5h5v-3H4zm10 0h-3v-3h3zm2-3v3h6v-3zm-3 8H2v-3h11zm2 0h5v-3h-5z"
        />
      </svg>
    );
  },
);

export default ProMistFill;
