import * as React from "react";
import { IconProps } from "./types";

export const ProNotificationOffLine = React.forwardRef<
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
        d="m18 19 3 3 1.414-1.414-19-19L2 3l3.471 3.471A7 7 0 0 0 5.001 9v2.586l-2 2V19h5a4 4 0 0 0 8 0zm-2-2H5v-2.586l2-2V9q0-.47.084-.916zm-4 4a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2M7.948 3.291A7 7 0 0 1 19 9v2.586l2 2v2.757l-4-4V9a5 5 0 0 0-7.609-4.266z"
      />
    </svg>
  );
});

export default ProNotificationOffLine;
