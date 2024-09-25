import * as React from "react";
import { IconProps } from "./types";

export const ProPlayReverseMiniFill = React.forwardRef<
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
      <path fill={color} d="M16.485 5.143 18 6v12l-1.515.858-10-6v-1.716z" />
    </svg>
  );
});

export default ProPlayReverseMiniFill;
