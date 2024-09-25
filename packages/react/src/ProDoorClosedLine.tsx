import * as React from "react";
import { IconProps } from "./types";

export const ProDoorClosedLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 11v2h2v-2z" />
        <path fill={color} d="m5 4 1-1h12l1 1v15h2v2H3v-2h2zm12 1H7v14h10z" />
      </svg>
    );
  },
);

export default ProDoorClosedLine;
