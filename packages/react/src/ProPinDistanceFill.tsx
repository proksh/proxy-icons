import * as React from "react";
import { IconProps } from "./types";

export const ProPinDistanceFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.091 13.038c.22.219.403.394.533.515q.319.296.646.581l.23.204.24-.213q.323-.282.636-.572a25 25 0 0 0 2.145-2.278c.586-.71 1.192-1.537 1.656-2.398.456-.846.823-1.81.823-2.774C13 3.199 10.448 1 7.5 1S2 3.2 2 6.103c0 .963.367 1.928.823 2.774.464.86 1.07 1.688 1.656 2.398a25 25 0 0 0 1.612 1.763M9 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.091 15.538a24 24 0 0 0 1.168 1.087l.241.213.24-.213q.322-.28.636-.572a25 25 0 0 0 2.145-2.278c.586-.71 1.192-1.537 1.656-2.398.456-.846.823-1.81.823-2.774C22 12.2 19.448 10 16.5 10S11 12.2 11 15.103c0 .963.367 1.928.823 2.774.464.86 1.07 1.688 1.656 2.398a25 25 0 0 0 1.612 1.763M18 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
      </svg>
    );
  },
);

export default ProPinDistanceFill;
