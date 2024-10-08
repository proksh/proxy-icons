import * as React from "react";
import { IconProps } from "./types";

export const ProWirelessChargingFill = React.forwardRef<
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
        d="m18.845 17.845 1.418 1.417A10.96 10.96 0 0 0 23 12c0-2.783-1.033-5.325-2.738-7.262l-1.417 1.418A8.97 8.97 0 0 1 21 12c0 2.23-.811 4.272-2.155 5.845"
      />
      <path
        fill={color}
        d="M17.425 16.425A6.97 6.97 0 0 0 19 12a6.97 6.97 0 0 0-1.575-4.425L16 9c.628.835 1 1.874 1 3a4.98 4.98 0 0 1-1 3zM3.738 4.738A10.96 10.96 0 0 0 1 12c0 2.783 1.034 5.325 2.738 7.262l1.418-1.418A8.97 8.97 0 0 1 3 12c0-2.23.812-4.272 2.156-5.844z"
      />
      <path
        fill={color}
        d="M6.575 7.575A6.97 6.97 0 0 0 5 12c0 1.678.59 3.219 1.575 4.425L8 15a4.98 4.98 0 0 1-1-3c0-1.126.372-2.165 1-3zM13 11V5.697L8.13 13H11v5.303L15.868 11z"
      />
    </svg>
  );
});

export default ProWirelessChargingFill;
