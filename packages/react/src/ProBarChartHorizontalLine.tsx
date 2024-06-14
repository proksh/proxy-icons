import * as React from "react";
import { IconProps } from "./types";

export const ProBarChartHorizontalLine = React.forwardRef<
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
      <path fill={color} d="M12 6H3V4h9zm10 7H3v-2h19zM3 20h13v-2H3z" />
    </svg>
  );
});

export default ProBarChartHorizontalLine;
