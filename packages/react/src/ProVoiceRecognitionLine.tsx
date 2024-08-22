import * as React from "react";
import { IconProps } from "./types";

export const ProVoiceRecognitionLine = React.forwardRef<
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
        d="M9 3H3v6h2V5h4zm6 2h4v4h2V3h-6zM5 15v4h4v2H3v-6zm14 0v4h-4v2h6v-6zM7 9v6h2V9zm4 9V6h2v12zm4-9v6h2V9z"
      />
    </svg>
  );
});

export default ProVoiceRecognitionLine;
