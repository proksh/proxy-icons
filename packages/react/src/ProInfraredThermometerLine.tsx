import * as React from "react";
import { IconProps } from "./types";

export const ProInfraredThermometerLine = React.forwardRef<
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
        d="M21 2H6.823L3.23 10.983l2.096 1.048L2.703 22h10.915l-1.565-3.13.638-2.87H14a4 4 0 0 0 4-4v-1h3zm-5 9v1a2 2 0 0 1-2 2h-.864l.666-3zm-10.23-.983L8.177 4H19v5h-6.802L9.947 19.13l.435.87H5.297l2.377-9.031z"
      />
    </svg>
  );
});

export default ProInfraredThermometerLine;
