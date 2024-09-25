import * as React from "react";
import { IconProps } from "./types";

export const ProH6Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.5 4v17h3v-7.5h6V21h3V4h-3v6.5h-6V4zm13.065 10.315L18.253 7.5h3.411L19.2 12.054a4.501 4.501 0 1 1-4.635 2.261M18.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
        />
      </svg>
    );
  },
);

export default ProH6Fill;
