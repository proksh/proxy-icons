import * as React from "react";
import { IconProps } from "./types";

export const ProArrowRightUpFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m19 6.004-1-1H8l-.708 1.707 4.293 4.293L5.3 17.29l1.414 1.414L13 12.42l4.293 4.292L19 16.005z"
        />
      </svg>
    );
  },
);

export default ProArrowRightUpFill;
