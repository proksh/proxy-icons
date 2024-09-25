import * as React from "react";
import { IconProps } from "./types";

export const ProSlideshow3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h20v15h-9v2h4v2H7v-2h4v-2H2zm13 7.5-5-3v6z" />
      </svg>
    );
  },
);

export default ProSlideshow3Fill;
