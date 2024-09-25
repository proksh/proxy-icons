import * as React from "react";
import { IconProps } from "./types";

export const ProPictureInPictureFill = React.forwardRef<
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
      <path fill={color} d="M22 3H2v18h8v-2H4V5h16v6h2z" />
      <path fill={color} d="M12 13h10v8H12z" />
    </svg>
  );
});

export default ProPictureInPictureFill;
