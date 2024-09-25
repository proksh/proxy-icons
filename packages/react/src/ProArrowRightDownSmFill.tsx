import * as React from "react";
import { IconProps } from "./types";

export const ProArrowRightDownSmFill = React.forwardRef<
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
        d="m11.017 12.569-2.724 2.724L9 17h7l1-1V9l-1.707-.707-2.724 2.724-3.765-3.764-1.551 1.551z"
      />
    </svg>
  );
});

export default ProArrowRightDownSmFill;
