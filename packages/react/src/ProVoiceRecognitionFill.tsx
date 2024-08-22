import * as React from "react";
import { IconProps } from "./types";

export const ProVoiceRecognitionFill = React.forwardRef<
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
        d="M21 3H3v18h18zM11 6v12h2V6zM7 9v6h2V9zm8 6V9h2v6z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default ProVoiceRecognitionFill;
