import * as React from "react";
import { IconProps } from "./types";

export const ProBasketballFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m16.954 3.313.093.054zm-.844-.43a9.96 9.96 0 0 0-5.94-.714 9.98 9.98 0 0 1-.31 7.44l1.774 1.025zM2.572 15.332a9.96 9.96 0 0 0 3.587 4.785l4.475-7.75-1.775-1.025a9.98 9.98 0 0 1-6.287 3.99m5.319 5.786a9.96 9.96 0 0 0 5.939.714 9.98 9.98 0 0 1 .31-7.441l-1.774-1.025zM21.43 8.669a9.96 9.96 0 0 0-3.588-4.787l-4.476 7.752 1.775 1.025a9.98 9.98 0 0 1 6.289-3.99m.475 1.946a9.95 9.95 0 0 1-.787 5.495l-4.234-2.445a8 8 0 0 1 5.02-3.05m-1.178 6.271-.131.227a8 8 0 0 0 .13-.227m-.607.956a9.95 9.95 0 0 1-4.365 3.428 8 8 0 0 1 .13-5.873zM2.097 13.385a9.95 9.95 0 0 1 .786-5.494l4.233 2.444a8 8 0 0 1-5.02 3.05M3.883 6.16a9.95 9.95 0 0 1 4.364-3.43 8 8 0 0 1-.13 5.873z"
        />
      </svg>
    );
  },
);

export default ProBasketballFill;
