import * as React from "react";
import { IconProps } from "./types";

export const ProMarkupFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M6.635 17.934A7.97 7.97 0 0 0 12 20a7.97 7.97 0 0 0 5.366-2.066l-1.417-4.25L15 13H9l-.949.684zM10 10.5v1h4v-1l-1.05-3.777a.987.987 0 0 0-1.9 0z"
        />
      </svg>
    );
  },
);

export default ProMarkupFill;
