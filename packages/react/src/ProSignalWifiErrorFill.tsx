import * as React from "react";
import { IconProps } from "./types";

export const ProSignalWifiErrorFill = React.forwardRef<
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
        d="M1.595 6.31A17.9 17.9 0 0 1 12 3c3.875 0 7.467 1.226 10.405 3.31l.204 1.438L21.615 9H18v4.552l-6 7.556L1.39 7.748z"
      />
      <path fill={color} d="M20 17v-7h2v7zm0 2v2h2v-2z" />
    </svg>
  );
});

export default ProSignalWifiErrorFill;
