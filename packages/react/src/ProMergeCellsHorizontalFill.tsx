import * as React from "react";
import { IconProps } from "./types";

export const ProMergeCellsHorizontalFill = React.forwardRef<
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
        d="M13 3h8v8.063h-3.003V9L15 12.008 17.997 15v-2.063H21V21h-8v-4.5h-2V21H3v-8.063h3.003V15L9 12.008 6.003 9v2.063H3V3h8v4.5h2zm-2 8.1h2V9.3h-2zm0 3.6h2v-1.8h-2z"
      />
    </svg>
  );
});

export default ProMergeCellsHorizontalFill;
