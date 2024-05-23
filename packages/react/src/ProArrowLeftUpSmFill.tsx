import * as React from "react";
import { IconProps } from "./types";

export const ProArrowLeftUpSmFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.986 11.434 15.71 8.71l-.707-1.707h-7l-1 1v7l1.707.707 2.724-2.725L15.2 16.75l1.55-1.552z"
        />
      </svg>
    );
  },
);

export default ProArrowLeftUpSmFill;
