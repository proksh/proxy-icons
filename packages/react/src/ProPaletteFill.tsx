import * as React from "react";
import { IconProps } from "./types";

export const ProPaletteFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2c2.349 0 4.51.811 6.218 2.168.815.569 1.733 1.466 2.457 2.528C21.403 7.763 22 9.094 22 10.5c0 1.746-.574 3.175-1.71 4.149C19.178 15.6 17.664 16 16 16h-2a2 2 0 0 0-1.242 3.568c.502.398.542 1.003.475 1.356C13.171 21.256 12.856 22 12 22 6.477 22 2 17.523 2 12m10-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-4.5 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18 10.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
        />
      </svg>
    );
  },
);

export default ProPaletteFill;
