import * as React from "react";
import { IconProps } from "./types";

export const ProPictureInPicture2Line = React.forwardRef<
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
        d="M9 8.586 6.707 6.293 5.293 7.707 7.586 10H6v2h5V7H9zM12 13h10v8H12zm2 2v4h6v-4z"
      />
    </svg>
  );
});

export default ProPictureInPicture2Line;
