import * as React from "react";
import { IconProps } from "./types";

export const ProBarChartGroupedLine = React.forwardRef<
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
        d="M15 18V1h2v17zM3 18v-8h2v8zm4-3v3h2v-3zm12 3V4h2v14zm2.5 2h-19v2h19z"
      />
    </svg>
  );
});

export default ProBarChartGroupedLine;
