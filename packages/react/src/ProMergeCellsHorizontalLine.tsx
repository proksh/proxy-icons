import * as React from "react";
import { IconProps } from "./types";

export const ProMergeCellsHorizontalLine = React.forwardRef<
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
      <path fill={color} d="M11 9.3v1.8h2V9.3zm0 3.6v1.8h2v-1.8z" />
      <path
        fill={color}
        d="M3 3v18h18V3zm8 2v2.5h2V5h6v6h-1.586l.793-.793-1.414-1.414L13.586 12l3.207 3.207 1.414-1.414-.793-.793H19v6h-6v-2.5h-2V19H5v-6h1.586l-.793.793 1.414 1.414L10.414 12 7.207 8.793l-1.414 1.414.793.793H5V5z"
      />
    </svg>
  );
});

export default ProMergeCellsHorizontalLine;
