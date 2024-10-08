import * as React from "react";
import { IconProps } from "./types";

export const ProGhostLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M16 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 16c1.105 0 2-1.12 2-2.5s-.895-2.5-2-2.5-2 1.12-2 2.5.895 2.5 2 2.5"
        />
        <path
          fill={color}
          d="M12 2a9 9 0 0 0-9 9v7.5a3.5 3.5 0 0 0 6.14 2.297A4 4 0 0 0 12 22c1.12 0 2.133-.46 2.86-1.203A3.5 3.5 0 0 0 21 18.5V11a9 9 0 0 0-9-9m-7 9a7 7 0 0 1 14 0v7.5a1.5 1.5 0 0 1-3 0v-1h-1.888l-.14.834a2 2 0 0 1-3.944 0l-.14-.834H8v1a1.5 1.5 0 0 1-3 0z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProGhostLine;
