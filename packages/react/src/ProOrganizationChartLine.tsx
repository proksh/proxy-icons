import * as React from "react";
import { IconProps } from "./types";

export const ProOrganizationChartLine = React.forwardRef<
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
        d="M8 3h8v6h-3v2h4l1 1v3h3v6h-8v-6h3v-2H8v2h3v6H3v-6h3v-3l1-1h4V9H8zm2 2v2h4V5zm5 12v2h4v-2zM5 19h4v-2H5z"
      />
    </svg>
  );
});

export default ProOrganizationChartLine;
