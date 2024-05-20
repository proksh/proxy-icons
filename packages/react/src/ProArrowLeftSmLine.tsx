import * as React from "react";
import { IconProps } from "./types";

export const ProArrowLeftSmLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m8.914 11 4.293-4.293-1.414-1.414L5.086 12l6.707 6.707 1.414-1.414L8.914 13H18.5v-2z"
        />
      </svg>
    );
  },
);

export default ProArrowLeftSmLine;
