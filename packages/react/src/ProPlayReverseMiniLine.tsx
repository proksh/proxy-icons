import * as React from "react";
import { IconProps } from "./types";

export const ProPlayReverseMiniLine = React.forwardRef<
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
        d="m18 6-1.515-.857-10 6v1.714l10 6L18 18zm-2 1.766v8.468L8.944 12z"
      />
    </svg>
  );
});

export default ProPlayReverseMiniLine;
