import * as React from "react";
import { IconProps } from "./types";

export const ProTShirt2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.901 3H2v9h3v9h14v-9h3V3h-6.901l-.194.75a3.002 3.002 0 0 1-5.81 0z"
        />
      </svg>
    );
  },
);

export default ProTShirt2Fill;
