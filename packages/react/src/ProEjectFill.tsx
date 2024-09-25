import * as React from "react";
import { IconProps } from "./types";

export const ProEjectFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 3.197 19.868 15H4.131zM4 19h16v-2H4z" />
      </svg>
    );
  },
);

export default ProEjectFill;
