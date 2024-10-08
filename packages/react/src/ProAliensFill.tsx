import * as React from "react";
import { IconProps } from "./types";

export const ProAliensFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.093 4.593C7.637 3.05 9.756 2 12 2s4.363 1.049 5.907 2.593S20.5 8.256 20.5 10.5c0 2.166-.989 5.216-2.436 7.703-.73 1.255-1.611 2.426-2.602 3.295C14.48 22.361 13.302 23 12 23s-2.48-.64-3.462-1.502c-.99-.869-1.871-2.04-2.602-3.295C4.489 15.716 3.5 12.666 3.5 10.5c0-2.244 1.049-4.363 2.593-5.907M6 11a5 5 0 0 0 5 5 5 5 0 0 0-5-5m12 0a5 5 0 0 0-5 5 5 5 0 0 0 5-5"
        />
      </svg>
    );
  },
);

export default ProAliensFill;
