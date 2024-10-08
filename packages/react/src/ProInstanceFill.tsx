import * as React from "react";
import { IconProps } from "./types";

export const ProInstanceFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.5 1.134h1l8.66 5 .5.866v10l-.5.866-8.66 5h-1l-8.66-5-.5-.866V7l.5-.866zm.5 9.7L7.514 8.143 6.485 9.857 11 12.567V17.5h2v-4.934l4.514-2.709-1.029-1.714z"
        />
      </svg>
    );
  },
);

export default ProInstanceFill;
