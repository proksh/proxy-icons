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
      {...props}
      ref={forwardedRef}
    >
      <path
        fill={color}
        d="M8 2 7 3v4H3L2 8v13l1 1h13l1-1v-4h4l1-1V3l-1-1zm9 6v7h3V4H9v3h7zm-8.5 9.914 5.207-5.207-1.414-1.414L8.5 15.086l-1.793-1.793-1.414 1.414z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default ProCheckboxMultipleFill;
