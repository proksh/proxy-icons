import * as React from "react";
import { IconProps } from "./types";

export const ProDragDropFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2 2 3v1h2V2zm5 0H6v2h2zm2 0h2v2h-2zm5 0h-1v2h2V3zM2 8V6h2v2zm14 0V6h-2v2H9L8 9v5H6v2h2v5l1 1h10.86l-1.762-3.054-2.223 2.15-.036-8.063L22 16.627V9l-1-1z"
        />
        <path
          fill={color}
          d="m22 17.325-2.17.621 1.912 3.312L22 21zM2 12v-2h2v2zm0 2v1l1 1h1v-2z"
        />
      </svg>
    );
  },
);

export default ProDragDropFill;
