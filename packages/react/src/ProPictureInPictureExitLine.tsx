import * as React from "react";
import { IconProps } from "./types";

export const ProPictureInPictureExitLine = React.forwardRef<
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
      <path fill={color} d="M22 3H2v18h8v-2H4V5h16v6h2z" />
      <path
        fill={color}
        d="M22 13H12v8h10zm-8 6v-4h6v4zM6 7h5v2H9.414l2.293 2.293-1.414 1.414L8 10.414V12H6z"
      />
    </svg>
  );
});

export default ProPictureInPictureExitLine;
