import * as React from "react";
import { IconProps } from "./types";

export const ProSplitCellsHorizontalLine = React.forwardRef<
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
        d="M10.207 10.207 8.793 8.793 5.586 12l3.207 3.207 1.414-1.414L9.414 13h5.172l-.793.793 1.414 1.414L17.414 13h.086v-.086l.914-.914-.914-.914V11h-.086l-2.207-2.207-1.414 1.414.793.793H9.414z"
      />
      <path fill={color} d="M3 3h18v18H3zm8 2H5v14h6v-4h2v4h6V5h-6v4h-2z" />
    </svg>
  );
});

export default ProSplitCellsHorizontalLine;
