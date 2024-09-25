import * as React from "react";
import { IconProps } from "./types";

export const ProStickyNote2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 3H3v18h12.914L21 15.914z" />
      </svg>
    );
  },
);

export default ProStickyNote2Fill;
