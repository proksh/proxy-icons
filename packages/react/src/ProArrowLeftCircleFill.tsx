import * as React from "react";
import { IconProps } from "./types";

export const ProArrowLeftCircleFill = React.forwardRef<
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
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-4.013v2.751h4.008v2.5H12v2.752l-4-3.992z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default ProArrowLeftCircleFill;
