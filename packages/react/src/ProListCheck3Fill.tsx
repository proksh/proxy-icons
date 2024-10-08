import * as React from "react";
import { IconProps } from "./types";

export const ProListCheck3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 6.5h-8v-3h8zM4 4 3 5v5l1 1h5l1-1V5L9 4zm9 9.5h8v-3h-8zm8 7h-8v-3h8zM6 21.621l5.06-5.06-2.12-2.122L6 17.38l-1.44-1.44-2.12 2.122z"
        />
      </svg>
    );
  },
);

export default ProListCheck3Fill;
