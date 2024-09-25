import * as React from "react";
import { IconProps } from "./types";

export const ProClapperboardLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.58 3h3.411L9.706 7H6.295zm7.126 4h-3.697l2.286-4h3.696z"
        />
        <path
          fill={color}
          d="m18.009 7 2.286-4H22v18H2V3h4.277L4 6.985V19h16V7z"
        />
      </svg>
    );
  },
);

export default ProClapperboardLine;
