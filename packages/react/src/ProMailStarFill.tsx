import * as React from "react";
import { IconProps } from "./types";

export const ProMailStarFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M22 3H2v1.009l10 7.727L22 4.01z" />
        <path
          fill={color}
          d="M2 21V6.536l10 7.728 10-7.727v9.933l-.275-.033-1.317-2.856H18.59l-1.317 2.856-3.123.37-.561 1.728 2.309 2.135-.066.33z"
        />
        <path
          fill={color}
          d="M20.77 17.753 19.5 15l-1.27 2.753-3.01.356 2.226 2.058-.591 2.974L19.5 21.66l2.645 1.48-.59-2.972 2.225-2.059z"
        />
      </svg>
    );
  },
);

export default ProMailStarFill;
