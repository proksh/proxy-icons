import * as React from "react";
import { IconProps } from "./types";

export const ProArrowRightDoubleLine = React.forwardRef<
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
        d="M5.543 7.207 10.336 12l-4.793 4.793 1.414 1.414L13.164 12 6.957 5.793z"
      />
      <path
        fill={color}
        d="M11.543 7.207 16.336 12l-4.793 4.793 1.414 1.414L19.164 12l-6.207-6.207z"
      />
    </svg>
  );
});

export default ProArrowRightDoubleLine;
