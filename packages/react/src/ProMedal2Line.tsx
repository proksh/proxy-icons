import * as React from "react";
import { IconProps } from "./types";

export const ProMedal2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 6V2h-2v4zm-1 2-2.257 4.893-5.351.635 3.956 3.659-1.05 5.285L12 19.84l4.702 2.632-1.05-5.285 3.957-3.66-5.352-.634zm.91 6.748 2.157.255-1.595 1.475.424 2.131L12 17.548l-1.896 1.061.424-2.13-1.595-1.476 2.157-.255.91-1.973z"
        />
        <path fill={color} d="M18 2v9h-2V2zM8 11V2H6v9z" />
      </svg>
    );
  },
);

export default ProMedal2Line;
