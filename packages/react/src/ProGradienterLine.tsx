import * as React from "react";
import { IconProps } from "./types";

export const ProGradienterLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4a8 8 0 0 0-7.938 7H2.049C2.551 5.947 6.815 2 12 2s9.45 3.947 9.952 9h-2.013A8 8 0 0 0 12 4m-9.95 9h2.012a8.001 8.001 0 0 0 15.876 0h2.013c-.502 5.053-4.766 9-9.951 9s-9.449-3.947-9.95-9"
        />
        <path fill={color} d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      </svg>
    );
  },
);

export default ProGradienterLine;
