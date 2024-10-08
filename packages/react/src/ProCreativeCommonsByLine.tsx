import * as React from "react";
import { IconProps } from "./types";

export const ProCreativeCommonsByLine = React.forwardRef<
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
      <path
        fill={color}
        d="m10 10-1 1v4h1.5v4h3v-4H15v-4l-1-1zm2-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
      <path
        fill={color}
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
      />
    </svg>
  );
});

export default ProCreativeCommonsByLine;
