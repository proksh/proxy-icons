import * as React from "react";
import { IconProps } from "./types";

export const ProSparkling2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m17 1 1.363 2.637L21 5l-2.637 1.363L17 9l-1.363-2.637L13 5l2.637-1.363zM8 4l2.727 5.273L16 12l-5.273 2.727L8 20l-2.727-5.273L0 12l5.273-2.727zm11.704 12.296L18 13l-1.704 3.296L13 18l3.296 1.704L18 23l1.704-3.296L23 18z"
        />
      </svg>
    );
  },
);

export default ProSparkling2Fill;
