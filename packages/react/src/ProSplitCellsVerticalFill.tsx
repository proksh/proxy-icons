import * as React from "react";
import { IconProps } from "./types";

export const ProSplitCellsVerticalFill = React.forwardRef<
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
        d="M3 11V3h18v8h-6v2h6v8H3v-8h6v-2zm8.063 4.003H9L12.008 18 15 15.003h-2.063V8.997H15L12.008 6 9 8.997h2.063z"
      />
    </svg>
  );
});

export default ProSplitCellsVerticalFill;
