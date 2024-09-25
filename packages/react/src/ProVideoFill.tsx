import * as React from "react";
import { IconProps } from "./types";

export const ProVideoFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm6.5 5v6l.757.429 5-3v-.858l-5-3z"
        />
      </svg>
    );
  },
);

export default ProVideoFill;
