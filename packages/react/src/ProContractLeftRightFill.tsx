import * as React from "react";
import { IconProps } from "./types";

export const ProContractLeftRightFill = React.forwardRef<
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
        d="m4.707 5.793 5.5 5.5v1.414l-5.5 5.5L3 17.5v-11zm14.586 0-5.5 5.5v1.414l5.5 5.5L21 17.5v-11z"
      />
    </svg>
  );
});

export default ProContractLeftRightFill;
