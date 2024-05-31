import * as React from "react";
import { IconProps } from "./types";

export const ProBrainFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 3.764v8.948c-.821-.63-1.932-1.044-3.39-1.206l-.22 1.988c1.997.222 2.765.948 3.144 1.747.447.944.466 2.194.466 3.759v.95a3.5 3.5 0 0 1-6-2.45v-1.644a4.252 4.252 0 0 1 1-7.67V6a3 3 0 0 1 5-2.236m2 0v8.948c.821-.63 1.932-1.044 3.39-1.206l.22 1.988c-1.997.222-2.765.948-3.144 1.747C13.02 16.185 13 17.435 13 19v.95a3.5 3.5 0 0 0 6-2.45v-1.644a4.252 4.252 0 0 0-1-7.67V6a3 3 0 0 0-5-2.236"
        />
      </svg>
    );
  },
);

export default ProBrainFill;
