import * as React from "react";
import { IconProps } from "./types";

export const ProDoorClosedFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M6 3 5 4v15H3v2h18v-2h-2V4l-1-1zm7 8h2v2h-2z" />
      </svg>
    );
  },
);

export default ProDoorClosedFill;
