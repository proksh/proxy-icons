import * as React from "react";
import { IconProps } from "./types";

export const ProCrop2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15 9H9v6h6z" />
        <path
          fill={color}
          d="M5 7v11l1 1h11v3h2v-3h3v-2h-3V6.414l2.207-2.207-1.414-1.414L17.586 5H7V2H5v3H2v2zm2 0h10v10H7z"
        />
      </svg>
    );
  },
);

export default ProCrop2Fill;
