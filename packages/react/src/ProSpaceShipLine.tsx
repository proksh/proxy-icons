import * as React from "react";
import { IconProps } from "./types";

export const ProSpaceShipLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g fill={color} clipPath="url(#a)">
          <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
          <path d="M12 1.72c.54.432 1.063.867 1.546 1.365a23 23 0 0 1 2.14 2.58c1.686 2.334 3.738 5.934 5.272 11.048l.3 1.003c-.512.128-1.024.262-1.54.375a41 41 0 0 1-5.204.796L12 24.417l-2.513-5.53a41 41 0 0 1-5.205-.796c-.516-.113-1.028-.247-1.54-.375l.3-1.003c1.534-5.114 3.586-8.714 5.272-11.048a23 23 0 0 1 2.14-2.58c.483-.498 1.005-.933 1.546-1.366M6.02 16.4c1.101.203 2.6.43 4.2.537l.596.04L12 19.584l1.185-2.605.596-.04a38 38 0 0 0 4.939-.68c-1.421-4.339-3.204-7.413-4.656-9.423A21 21 0 0 0 12 4.365a21 21 0 0 0-2.064 2.47C8.484 8.845 6.7 11.92 5.28 16.258q.328.068.739.143" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill={color} d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ProSpaceShipLine;
