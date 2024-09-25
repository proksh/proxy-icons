import * as React from "react";
import { IconProps } from "./types";

export const ProGift2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.337 7A3.5 3.5 0 0 1 12 3.05 3.5 3.5 0 0 1 17.663 7H22v5H2V7zM8 5.5A1.5 1.5 0 0 0 9.5 7H11V5.5a1.5 1.5 0 0 0-3 0M14.5 7A1.5 1.5 0 1 0 13 5.5V7zm5.5 7H4v8h16z"
        />
      </svg>
    );
  },
);

export default ProGift2Fill;
