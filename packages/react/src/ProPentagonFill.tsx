import * as React from "react";
import { IconProps } from "./types";

export const ProPentagonFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.686 8.528 12 .764 1.313 8.528 5.395 21.09h13.209z"
        />
      </svg>
    );
  },
);

export default ProPentagonFill;
