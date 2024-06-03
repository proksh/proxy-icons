import * as React from "react";
import { IconProps } from "./types";

export const ProClapperboardFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h4.277L4 6.985V7h2.295L8.58 3h3.411L9.706 7h2.303l2.286-4h3.696l-2.285 4h2.303l2.286-4H22v18H2z"
        />
      </svg>
    );
  },
);

export default ProClapperboardFill;
