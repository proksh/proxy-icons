import * as React from "react";
import { IconProps } from "./types";

export const ProSplitCellsHorizontalFill = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M13 3h8v18h-8v-6h-2v6H3V3h8v6h2zm-4.003 8.063V9L6 12.008 8.997 15v-2.063h6.006V15L18 12.008 15.003 9v2.063z"
      />
    </svg>
  );
});

export default ProSplitCellsHorizontalFill;
