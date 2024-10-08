import * as React from "react";
import { IconProps } from "./types";

export const ProFlightTakeoffLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m1.71 11.105 1.45-.388 2.467 2.445 5.07-1.359-4.485-7.08 1.932-.518 6.9 6.433 5.313-1.423a1.5 1.5 0 0 1 .777 2.898L5.276 16.362a.75.75 0 0 1-.846-.36zM20 19H4v2h16z"
        />
      </svg>
    );
  },
);

export default ProFlightTakeoffLine;
