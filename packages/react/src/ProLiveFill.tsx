import * as React from "react";
import { IconProps } from "./types";

export const ProLiveFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 4h16v5.131l6-4V18.87l-6-4V20H1zm5.5 5v6l.757.429 5-3v-.858l-5-3z"
        />
      </svg>
    );
  },
);

export default ProLiveFill;
