import * as React from "react";
import { IconProps } from "./types";

export const ProCharacterRecognitionFill = React.forwardRef<
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
      <path fill={color} d="M10.83 12 12 9.141 13.17 12z" />
      <path
        fill={color}
        d="M21 3H3v18h18zM10.012 14l-1.227 3H6.624l4.45-10.879h1.851L17.376 17h-2.16l-1.227-3z"
      />
    </svg>
  );
});

export default ProCharacterRecognitionFill;
