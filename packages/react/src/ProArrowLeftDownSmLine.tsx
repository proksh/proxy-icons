import * as React from "react";
import { IconProps } from "./types";

export const ProArrowLeftDownSmLine = React.forwardRef<
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
        d="m9.003 13.449 6.195-6.196 1.552 1.551L10.554 15h4.449v2h-8V9h2z"
      />
    </svg>
  );
});

export default ProArrowLeftDownSmLine;
