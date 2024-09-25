import * as React from "react";
import { IconProps } from "./types";

export const ProDropLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2.86q-.242.23-.551.53a47 47 0 0 0-2.691 2.856C7.778 7.383 6.82 8.63 6.114 9.843 5.392 11.08 5 12.163 5 13a7 7 0 1 0 14 0c0-.836-.392-1.92-1.114-3.157-.707-1.212-1.665-2.46-2.644-3.597A47 47 0 0 0 12 2.86m0-2.696a55 55 0 0 1 1.949 1.796 49 49 0 0 1 2.809 2.98c1.02 1.186 2.063 2.537 2.856 3.895C20.392 10.17 21 11.627 21 13a9 9 0 1 1-18 0c0-1.373.608-2.831 1.386-4.165.793-1.358 1.835-2.709 2.856-3.894a49 49 0 0 1 2.81-2.98A55 55 0 0 1 12 .163"
        />
      </svg>
    );
  },
);

export default ProDropLine;
