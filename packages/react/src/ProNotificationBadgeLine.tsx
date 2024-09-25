import * as React from "react";
import { IconProps } from "./types";

export const ProNotificationBadgeLine = React.forwardRef<
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
        d="M19 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
      />
      <path fill={color} d="M4 4 3 5v16l1 1h16l1-1v-9h-2v8H5V6h8V4z" />
    </svg>
  );
});

export default ProNotificationBadgeLine;
