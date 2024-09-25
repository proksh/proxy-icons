import * as React from "react";
import { IconProps } from "./types";

export const ProArrowRightDoubleFill = React.forwardRef<
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
        d="M5.707 6.293 4 7v10l1.707.707 5-5v-1.414zm9 0L13 7v10l1.707.707 5-5v-1.414z"
      />
    </svg>
  );
});

export default ProArrowRightDoubleFill;
