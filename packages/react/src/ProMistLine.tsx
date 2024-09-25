import * as React from "react";
import { IconProps } from "./types";

export const ProMistLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 6h13V4H4zm15 0h3V4h-3zM2 11V9h4v2zm6 0h3V9H8zm12 0h-7V9h7zM4 16h5v-2H4zm10 0h-3v-2h3zm2-2v2h6v-2zm-3 7H2v-2h11zm2 0h5v-2h-5z"
        />
      </svg>
    );
  },
);

export default ProMistLine;
