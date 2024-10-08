import * as React from "react";
import { IconProps } from "./types";

export const ProNotificationNewFill = React.forwardRef<
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
      <circle
        cx="16"
        cy="5"
        r="2"
        fill={color}
        stroke={color}
        strokeWidth="2"
      />
      <path
        fill={color}
        d="M5 9a7 7 0 0 1 7-7 5 5 0 0 0 7 7v2.586l2 2V19h-5a4 4 0 0 1-8 0H3v-5.414l2-2zm5 10a2 2 0 1 0 4 0z"
      />
      <path fill={color} d="M16 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
    </svg>
  );
});

export default ProNotificationNewFill;
