import * as React from "react";
import { IconProps } from "./types";

export const ProSlideshowFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v2H2zm20 3H2v15h9v2h2v-2h9zm-10.506 8.667A3 3 0 1 1 8 10.172l.024-.009A3 3 0 0 1 9 10v3h3c0 .342-.059.68-.172 1l-.01.027q-.122.339-.324.64M13 10h5v2h-5zm0 4h5v2h-5z"
        />
      </svg>
    );
  },
);

export default ProSlideshowFill;
