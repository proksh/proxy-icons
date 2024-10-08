import * as React from "react";
import { IconProps } from "./types";

export const ProInfraredThermometerFill = React.forwardRef<
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
        d="M6.823 2H21v9h-3v1a4 4 0 0 1-4 4h-1.309l-.638 2.87L13.618 22H2.703l2.623-9.969-2.096-1.048zm6.313 12H14a2 2 0 0 0 2-2v-1h-2.198z"
      />
    </svg>
  );
});

export default ProInfraredThermometerFill;
