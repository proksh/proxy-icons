import * as React from "react";
import { IconProps } from "./types";

export const ProH2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.5 21V4h3v6.5h6V4h3v17h-3v-7.5h-6V21zm17.25-10c-.69 0-1.25.56-1.25 1.25v.25h-3v-.25a4.25 4.25 0 0 1 8.5 0v.13a4.38 4.38 0 0 1-1.151 2.96L19.409 18h3.341v3H15v-2.629l4.637-5.059A1.38 1.38 0 0 0 20 12.38v-.13c0-.69-.56-1.25-1.25-1.25"
        />
      </svg>
    );
  },
);

export default ProH2Fill;
