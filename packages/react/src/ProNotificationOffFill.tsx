import * as React from "react";
import { IconProps } from "./types";

export const ProNotificationOffFill = React.forwardRef<
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
        d="m18 19 3 3 1.414-1.414-19-19L2 3l3.471 3.471A7 7 0 0 0 5.001 9v2.586l-2 2V19h5a4 4 0 0 0 8 0zm-6 2a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2m9-4.657v-2.757l-2-2V9A7 7 0 0 0 7.948 3.291z"
      />
    </svg>
  );
});

export default ProNotificationOffFill;
