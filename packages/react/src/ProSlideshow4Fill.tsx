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
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M22 3v18H2V3h6.17A3 3 0 0 1 11 1h2c1.306 0 2.418.835 2.83 2zM11 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm4 9-5-3v6z"
        />
      </svg>
    );
  },
);

export default ProSlideshow4Fill;
