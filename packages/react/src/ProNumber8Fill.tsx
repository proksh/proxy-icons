import * as React from "react";
import { IconProps } from "./types";

export const ProNumber8Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.19 11.295a6 6 0 1 0-8.38 0C6.126 12.458 5 14.317 5 16.5c0 3.721 3.272 6.5 7 6.5s7-2.779 7-6.5c0-2.183-1.126-4.042-2.81-5.206M9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3 6c2.347 0 4 1.698 4 3.5S14.347 20 12 20s-4-1.698-4-3.5S9.653 13 12 13"
        />
      </svg>
    );
  },
);

export default ProNumber8Fill;
