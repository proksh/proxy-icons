import * as React from "react";
import { IconProps } from "./types";

export const ProArrowTurnForwardLine = React.forwardRef<
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
        d="m17.293 9.707 1.414-1.414L14 3.586 9.293 8.293l1.414 1.414L13 7.414V15a3 3 0 1 1-6 0v-5H5v5a5 5 0 0 0 10 0V7.414z"
      />
    </svg>
  );
});

export default ProArrowTurnForwardLine;
