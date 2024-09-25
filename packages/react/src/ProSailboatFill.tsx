import * as React from "react";
import { IconProps } from "./types";

export const ProSailboatFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m13.226 3.367-9 11L5 16h9l1-1V4zM21.618 18H2l2.7 3.6.8.4H19l.894-.553z"
        />
      </svg>
    );
  },
);

export default ProSailboatFill;
