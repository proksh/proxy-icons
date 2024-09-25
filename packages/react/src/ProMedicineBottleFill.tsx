import * as React from "react";
import { IconProps } from "./types";

export const ProMedicineBottleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 2h14v2H5zm12 3H7v2H5L4 8v13l1 1h14l1-1V8l-1-1h-2zm-6 12v-2H9v-2h2v-2h2v2h2v2h-2v2z"
        />
      </svg>
    );
  },
);

export default ProMedicineBottleFill;
