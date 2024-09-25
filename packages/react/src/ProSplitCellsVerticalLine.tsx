import * as React from "react";
import { IconProps } from "./types";

export const ProSplitCellsVerticalLine = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="m10.207 13.793-1.414 1.414L12 18.414l3.207-3.207-1.414-1.414-.793.793V9.414l.793.793 1.414-1.414L13 6.586V6.5h-.086L12 5.586l-.914.914H11v.086L8.793 8.793l1.414 1.414.793-.793v5.172z"
      />
      <path fill={color} d="M3 21V3h18v18zm2-8v6h14v-6h-4v-2h4V5H5v6h4v2z" />
    </svg>
  );
});

export default ProSplitCellsVerticalLine;
