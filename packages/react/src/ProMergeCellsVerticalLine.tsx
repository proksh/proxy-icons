import * as React from "react";
import { IconProps } from "./types";

export const ProMergeCellsVerticalLine = React.forwardRef<
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
      <path fill={color} d="M9.3 13h1.8v-2H9.3zm3.6 0h1.8v-2h-1.8z" />
      <path
        fill={color}
        d="M3 21V3h18v18zm2-8v6h6v-1.586l-.793.793-1.414-1.414L12 13.586l3.207 3.207-1.414 1.414-.793-.793V19h6v-6h-2.5v-2H19V5h-6v1.586l.793-.793 1.414 1.414L12 10.414 8.793 7.207l1.414-1.414.793.793V5H5v6h2.5v2z"
      />
    </svg>
  );
});

export default ProMergeCellsVerticalLine;
