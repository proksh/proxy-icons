import * as React from "react";
import { IconProps } from "./types";

export const ProEarthquakeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 8.564v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022l8-7.429zM14.25 19H18V9.436l-6-5.571-6 5.571V19h4.429l1.071-1.5L8 14l5-3-2.5-2 3-3-.5 3 2.5 2-4 3 3.5 3z"
        />
      </svg>
    );
  },
);

export default ProEarthquakeLine;
