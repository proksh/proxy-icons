import * as React from "react";
import { IconProps } from "./types";

export const ProSignalWifiErrorLine = React.forwardRef<
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
        d="M12 17.892 3.635 7.358A15.9 15.9 0 0 1 12 5c3.067 0 5.931.862 8.365 2.358l-.51.642h2.554l.2-.252-.204-1.438A17.9 17.9 0 0 0 12 3 17.9 17.9 0 0 0 1.595 6.31L1.39 7.748 12 21.108l6-7.556v-3.216z"
      />
      <path fill={color} d="M20 17v-7h2v7zm0 2v2h2v-2z" />
    </svg>
  );
});

export default ProSignalWifiErrorLine;
