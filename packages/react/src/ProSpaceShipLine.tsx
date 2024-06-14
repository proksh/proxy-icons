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
          <path d="M12 1.72c.235.187.475.37.704.565q.068.058.187.165c.159.143.381.353.655.635a23 23 0 0 1 2.14 2.58c1.686 2.334 3.738 5.934 5.272 11.048l.3 1.003-1.019.255-.008.002-.028.007a15 15 0 0 1-.485.111 41 41 0 0 1-5.204.796L12 24.417l-2.513-5.53a41 41 0 0 1-5.69-.907l-.028-.007-.008-.002h-.003L4 17l-.242.97-1.017-.254.301-1.003c1.534-5.114 3.586-8.714 5.272-11.048a23 23 0 0 1 2.14-2.58 14 14 0 0 1 .842-.8c.23-.195.469-.378.704-.566M6.02 16.4c1.101.203 2.6.43 4.2.537l.596.04L12 19.584l1.185-2.605.596-.04a38 38 0 0 0 4.939-.68c-1.421-4.339-3.204-7.413-4.656-9.423A21 21 0 0 0 12 4.365l-.11.113a21 21 0 0 0-1.954 2.357C8.484 8.845 6.7 11.92 5.28 16.258q.328.068.739.143" />
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
