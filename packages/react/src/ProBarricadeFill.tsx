import * as React from "react";
import { IconProps } from "./types";

export const ProBarricadeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.83 3H8.17l-.844 4.5h9.348zM6.201 13.5l.75-4H17.05l.75 4zm-.375 2h12.348l.656 3.5H21v2H3v-2h2.17z"
        />
      </svg>
    );
  },
);

export default ProBarricadeFill;
