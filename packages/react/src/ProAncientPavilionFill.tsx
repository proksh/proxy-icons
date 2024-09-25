import * as React from "react";
import { IconProps } from "./types";

export const ProAncientPavilionFill = React.forwardRef<
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
        d="M10.435 3.64C10.838 2.951 11 2.38 11 2h2c0 .381.162.952.566 1.64.393.67.978 1.385 1.717 2.04 1.485 1.316 3.498 2.31 5.672 2.32l1.217.006-.242 1.193A3.5 3.5 0 0 1 19 11.965V19h2v2H3v-2h2v-7.036A3.5 3.5 0 0 1 2.07 9.2l-.242-1.193L3.045 8c2.175-.01 4.187-1.004 5.672-2.32.74-.655 1.324-1.37 1.718-2.04M7 19h10v-7H7z"
      />
    </svg>
  );
});

export default ProAncientPavilionFill;
