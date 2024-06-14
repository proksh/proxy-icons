import * as React from "react";
import { IconProps } from "./types";

export const ProMailStarLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v10.5h-2V7.227l-8 7.111-8-7.111V19h10v2H2zm2.505 2L12 11.662 19.495 5z"
        />
        <path
          fill={color}
          d="M20.77 17.753 19.5 15l-1.27 2.753-3.01.356 2.226 2.058-.59 2.974L19.5 21.66l2.645 1.48-.59-2.972 2.225-2.059z"
        />
      </svg>
    );
  },
);

export default ProMailStarLine;
