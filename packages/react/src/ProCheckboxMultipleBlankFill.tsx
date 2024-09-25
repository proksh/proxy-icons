import * as React from "react";
import { IconProps } from "./types";

export const ProCheckboxMultipleBlankFill = React.forwardRef<
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
        d="M10 2a3 3 0 0 0-3 3v2H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-2h2a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm7 13v-5a3 3 0 0 0-3-3H9V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1z"
      />
    </svg>
  );
});

export default ProCheckboxMultipleBlankFill;
