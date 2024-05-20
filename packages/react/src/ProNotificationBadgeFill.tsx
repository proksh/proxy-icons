import * as React from "react";
import { IconProps } from "./types";

export const ProNotificationBadgeFill = React.forwardRef<
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
      <path fill={color} d="M19 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
      <path
        fill={color}
        d="M13.341 4A6 6 0 0 0 21 11.659V21l-1 1H4l-1-1V5l1-1z"
      />
    </svg>
  );
});

export default ProNotificationBadgeFill;
