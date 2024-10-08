import * as React from "react";
import { IconProps } from "./types";

export const ProPencilRuler2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.88 5.636 5.636 9.878 1.748 5.99l4.243-4.243zM16.243 2.1 21.9 7.757 7.756 21.9 2.1 16.243l3.535-3.535 2.828 2.828 1.414-1.415-2.828-2.828L8.464 9.88 12 13.414 13.414 12 9.878 8.465l1.415-1.414 2.828 2.828 1.414-1.414-2.828-2.829zm-2.121 16.264 4.243-4.243 2.06 2.06v4.244h-4.242z"
        />
      </svg>
    );
  },
);

export default ProPencilRuler2Fill;
