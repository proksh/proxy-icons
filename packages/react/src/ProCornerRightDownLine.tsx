import * as React from "react";
import { IconProps } from "./types";

export const ProCornerRightDownLine = React.forwardRef<
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
        d="M5 7h7v10.086l-3.793-3.793-1.414 1.414L13 20.914l6.207-6.207-1.414-1.414L14 17.086V5H5z"
      />
    </svg>
  );
});

export default ProCornerRightDownLine;
