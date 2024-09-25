import * as React from "react";
import { IconProps } from "./types";

export const ProGraduationCapFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1.834 23.944 9H24v8.5h-2v-7.334l-10 6L.057 9z"
        />
        <path
          fill={color}
          d="M4 18.562v-5.446l8 4.8 8-4.8v5.445l-.3.294A10.97 10.97 0 0 1 12 22c-2.998 0-5.717-1.2-7.7-3.145z"
        />
      </svg>
    );
  },
);

export default ProGraduationCapFill;
