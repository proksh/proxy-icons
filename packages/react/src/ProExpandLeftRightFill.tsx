import * as React from "react";
import { IconProps } from "./types";

export const ProExpandLeftRightFill = React.forwardRef<
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
        d="m8.793 5.793-5.5 5.5v1.414l5.5 5.5L10.5 17.5v-11zm6.414 0 5.5 5.5v1.414l-5.5 5.5L13.5 17.5v-11z"
      />
    </svg>
  );
});

export default ProExpandLeftRightFill;
