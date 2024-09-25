import * as React from "react";
import { IconProps } from "./types";

export const ProOrganizationChartFill = React.forwardRef<
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
        d="M16 3H8v6h3v2H7l-1 1v3H3v6h8v-6H8v-2h8v2h-3v6h8v-6h-3v-3l-1-1h-4V9h3z"
      />
    </svg>
  );
});

export default ProOrganizationChartFill;
