import * as React from "react";
import { IconProps } from "./types";

export const ProSyringeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m22.314 7.343-5.657-5.657-1.414 1.415 2.121 2.12-2.121 2.122-2.122-2.121h-1.414l-7.071 7.07-.293.708v5.243L2.515 20.07l1.414 1.414 1.828-1.828H11l.707-.293 7.071-7.071v-1.414l-2.121-2.122 2.121-2.12 2.121 2.12zM11 8.757l1.414-1.414 4.243 4.243-6.071 6.07H6.343v-4.242L6.757 13l1.768 1.768 1.414-1.414-1.767-1.768 1.414-1.415 1.768 1.768 1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProSyringeLine;
