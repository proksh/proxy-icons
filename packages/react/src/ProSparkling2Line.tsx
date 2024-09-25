import * as React from "react";
import { IconProps } from "./types";

export const ProSparkling2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m17 1 1.363 2.637L21 5l-2.637 1.363L17 9l-1.363-2.637L13 5l2.637-1.363zm-6.273 8.273L8 4 5.273 9.273 0 12l5.273 2.727L8 20l2.727-5.273L16 12zM11.645 12l-2.403 1.242L8 15.646l-1.242-2.402L4.355 12l2.403-1.242L8 8.355l1.242 2.403zm8.059 4.296L18 13l-1.704 3.296L13 18l3.296 1.704L18 23l1.704-3.296L23 18z"
        />
      </svg>
    );
  },
);

export default ProSparkling2Line;
