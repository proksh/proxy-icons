import * as React from "react";
import { IconProps } from "./types";

export const ProParkingLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.5 3H6v18h2v-7h5.5a5.5 5.5 0 1 0 0-11M8 12V5h5.5a3.5 3.5 0 1 1 0 7z"
        />
      </svg>
    );
  },
);

export default ProParkingLine;
