import * as React from "react";
import { IconProps } from "./types";

export const ProSlideshow4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 3h-6.17A3 3 0 0 0 13 1h-2a3 3 0 0 0-2.83 2H2v18h20zM11 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm4 9-5-3v6z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSlideshow4Fill;
