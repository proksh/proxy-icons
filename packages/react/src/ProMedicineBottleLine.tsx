import * as React from "react";
import { IconProps } from "./types";

export const ProMedicineBottleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 13v-2h2v2h2v2h-2v2h-2v-2H9v-2z" />
        <path
          fill={color}
          d="M7 7V4H5V2h14v2h-2v3a3 3 0 0 1 3 3v11l-1 1H5l-1-1V10a3 3 0 0 1 3-3m8-3H9v3h6zM7 9a1 1 0 0 0-1 1v10h12V10a1 1 0 0 0-1-1z"
        />
      </svg>
    );
  },
);

export default ProMedicineBottleLine;
