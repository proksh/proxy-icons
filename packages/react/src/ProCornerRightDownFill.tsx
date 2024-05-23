import * as React from "react";
import { IconProps } from "./types";

export const ProCornerRightDownFill = React.forwardRef<
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
        d="M12 7H5V5h9v8h4.5l.707 1.707-5.5 5.5h-1.414l-5.5-5.5L7.5 13H12z"
      />
    </svg>
  );
});

export default ProCornerRightDownFill;
