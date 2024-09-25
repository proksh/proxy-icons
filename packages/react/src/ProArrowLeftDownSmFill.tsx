import * as React from "react";
import { IconProps } from "./types";

export const ProArrowLeftDownSmFill = React.forwardRef<
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
        d="m12.986 12.569 2.724 2.724L15.003 17h-7l-1-1V9l1.707-.707 2.724 2.724L15.2 7.253l1.55 1.551z"
      />
    </svg>
  );
});

export default ProArrowLeftDownSmFill;
