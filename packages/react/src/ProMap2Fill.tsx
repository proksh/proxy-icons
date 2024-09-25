import * as React from "react";
import { IconProps } from "./types";

export const ProMap2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.038 1.9 2 4.834V22l6.962-2.9 6 3L22 19.166V2l-6.962 2.9zM9 16.918v-12.8l5.962 2.981.038-.016v12.799l-5.962-2.981z"
        />
      </svg>
    );
  },
);

export default ProMap2Fill;
