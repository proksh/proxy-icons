import * as React from "react";
import { IconProps } from "./types";

export const ProPictureInPictureExitFill = React.forwardRef<
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
      <path fill={color} d="M2 3h20v8h-2V5H4v14h6v2H2z" />
      <path
        fill={color}
        d="M11.414 7H6v5.414l2-2 2.293 2.293 1.414-1.414L9.414 9zM22 13H12v8h10z"
      />
    </svg>
  );
});

export default ProPictureInPictureExitFill;
