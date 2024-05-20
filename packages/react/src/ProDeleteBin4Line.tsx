import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteBin4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m10.586 14-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14l1.768 1.768-1.414 1.414L12 15.414l-1.768 1.768-1.414-1.414z"
        />
        <path
          fill={color}
          d="M8 2 7 3v3H2v2h2v13l1 1h14l1-1V8h2V6h-5V3l-1-1zm7 4V4H9v2zM6 8h12v12H6z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProDeleteBin4Line;
