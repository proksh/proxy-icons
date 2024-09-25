import * as React from "react";
import { IconProps } from "./types";

export const ProExpandLeftRightLine = React.forwardRef<
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
        d="m8.793 5.793 1.414 1.414L5.414 12l4.793 4.793-1.414 1.414L2.586 12zm6.414 0-1.414 1.414L18.586 12l-4.793 4.793 1.414 1.414L21.414 12z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default ProExpandLeftRightLine;
