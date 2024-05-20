import * as React from "react";
import { IconProps } from "./types";

export const ProArrowRightDownSmLine = React.forwardRef<
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
        d="M15 13.449 8.804 7.253 7.253 8.804 13.449 15H9v2h8V9h-2z"
      />
    </svg>
  );
});

export default ProArrowRightDownSmLine;
