import * as React from "react";
import { IconProps } from "./types";

export const ProOilFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 2 1-1h5l1 1v2h-7zM9 5l-.809.412-4 5.5L4 11.5V21l1 1h14l1-1V6l-1-1zm-1 7h2v6H8z"
        />
      </svg>
    );
  },
);

export default ProOilFill;
