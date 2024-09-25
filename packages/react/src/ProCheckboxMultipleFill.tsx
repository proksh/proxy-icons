import * as React from "react";
import { IconProps } from "./types";

export const ProCheckboxMultipleFill = React.forwardRef<
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
        d="M10 2a3 3 0 0 0-3 3v2H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-2h2a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm7 8v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v2h5a3 3 0 0 1 3 3m-3.293 2.707L8.5 17.914l-3.207-3.207 1.414-1.414L8.5 15.086l3.793-3.793z"
      />
    </svg>
  );
});

export default ProCheckboxMultipleFill;
