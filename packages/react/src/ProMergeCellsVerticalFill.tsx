import * as React from "react";
import { IconProps } from "./types";

export const ProMergeCellsVerticalFill = React.forwardRef<
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
        d="M3 11V3h8.063v3.003H9L12.008 9 15 6.003h-2.063V3H21v8h-4.5v2H21v8h-8.063v-3.003H15L12.008 15 9 17.997h2.063V21H3v-8h4.5v-2zm6.3 2h1.8v-2H9.3zm3.6 0h1.8v-2h-1.8z"
      />
    </svg>
  );
});

export default ProMergeCellsVerticalFill;
