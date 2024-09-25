import * as React from "react";
import { IconProps } from "./types";

export const ProHashtagFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.774 3h3.018l-.49 4.5H20v3h-3.024l-.326 3H20v3h-3.676l-.49 4.5h-3.017l.49-4.5h-2.983l-.49 4.5H6.818l.49-4.5H4v-3h3.632l.327-3H4v-3h4.285L8.774 3h3.018l-.49 4.5h2.983zm-.815 7.5h-2.983l-.326 3h2.983z"
        />
      </svg>
    );
  },
);

export default ProHashtagFill;
