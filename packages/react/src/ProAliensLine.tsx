import * as React from "react";
import { IconProps } from "./types";

export const ProAliensLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 11a5 5 0 0 1-5 5 5 5 0 0 1 5-5M6 11a5 5 0 0 0 5 5 5 5 0 0 0-5-5"
        />
        <path
          fill={color}
          d="M6.093 4.593C7.637 3.05 9.756 2 12 2s4.363 1.049 5.907 2.593S20.5 8.256 20.5 10.5c0 2.166-.989 5.216-2.436 7.703-.73 1.255-1.611 2.426-2.602 3.295C14.48 22.361 13.302 23 12 23s-2.48-.64-3.462-1.502c-.99-.869-1.871-2.04-2.602-3.295C4.489 15.716 3.5 12.666 3.5 10.5c0-2.244 1.049-4.363 2.593-5.907m1.414 1.414C6.268 7.247 5.5 8.878 5.5 10.5c0 1.7.828 4.4 2.165 6.697.66 1.136 1.413 2.115 2.192 2.798C10.643 20.685 11.368 21 12 21s1.357-.315 2.143-1.005c.779-.683 1.531-1.662 2.192-2.798C17.672 14.9 18.5 12.2 18.5 10.5c0-1.622-.768-3.253-2.007-4.493C15.253 4.768 13.622 4 12 4s-3.253.768-4.493 2.007"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProAliensLine;
