import * as React from "react";
import { IconProps } from "./types";

export const ProBox2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m21.16 6.134-8.66-5h-1l-8.66 5-.5.866v10l.5.866 8.66 5h1l8.66-5 .5-.866V7zM4.34 7.744 12 12v8.845l-7.66-4.422z"
        />
      </svg>
    );
  },
);

export default ProBox2Fill;
