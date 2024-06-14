import * as React from "react";
import { IconProps } from "./types";

export const ProMedal2Fill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M13 6V2h-2v4zm1.257 6.893L12 8l-2.257 4.893-5.351.635 3.956 3.659-1.05 5.285L12 19.84l4.702 2.632-1.05-5.285 3.957-3.66z"
        />
        <path fill={color} d="M18 2v9h-2V2zM8 11V2H6v9z" />
      </svg>
    );
  },
);

export default ProMedal2Fill;
