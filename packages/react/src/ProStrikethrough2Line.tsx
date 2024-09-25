import * as React from "react";
import { IconProps } from "./types";

export const ProStrikethrough2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 6h6V4H5v2h6v5h2zm-2 14v-6H3v-2h18v2h-8v6z" />
      </svg>
    );
  },
);

export default ProStrikethrough2Line;
