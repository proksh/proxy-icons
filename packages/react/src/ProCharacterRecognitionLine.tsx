import * as React from "react";
import { IconProps } from "./types";

export const ProCharacterRecognitionLine = React.forwardRef<
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
        d="M9 3H3v6h2V5h4zm6 2h4v4h2V3h-6zM5 15v4h4v2H3v-6zm16 0h-2v4h-4v2h6z"
      />
      <path
        fill={color}
        d="m10.012 14-1.227 3H6.624l4.45-10.879h1.851L17.376 17h-2.16l-1.227-3zm.818-2h2.34L12 9.141z"
      />
    </svg>
  );
});

export default ProCharacterRecognitionLine;
