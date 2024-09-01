import * as React from "react";
import { IconProps } from "./types";

export const ProSlideshow3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m15 10.5-5-3v6z" />
        <path fill={color} d="M2 3h20v15h-9v2h4v2H7v-2h4v-2H2zm2 2v11h16V5z" />
      </svg>
    );
  },
);

export default ProSlideshow3Line;
