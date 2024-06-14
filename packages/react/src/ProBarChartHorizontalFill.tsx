import * as React from "react";
import { IconProps } from "./types";

export const ProBarChartHorizontalFill = React.forwardRef<
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
      <path fill={color} d="M12 6.5H3v-3h9zm10 7H3v-3h19zm-19 7h13v-3H3z" />
    </svg>
  );
});

export default ProBarChartHorizontalFill;
