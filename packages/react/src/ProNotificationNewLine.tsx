import * as React from "react";
import { IconProps } from "./types";

export const ProNotificationNewLine = React.forwardRef<
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
        d="M19 9v2.586l2 2V19h-5a4 4 0 0 1-8 0H3v-5.414l2-2V9a7 7 0 0 1 7-7 5 5 0 0 0-.916 2.084A5 5 0 0 0 7 9v3.414l-2 2V17h14v-2.586l-2-2V9.9a5 5 0 0 0 2-.9m-7 12a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2"
      />
      <path
        fill={color}
        d="M16 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
      />
    </svg>
  );
});

export default ProNotificationNewLine;
