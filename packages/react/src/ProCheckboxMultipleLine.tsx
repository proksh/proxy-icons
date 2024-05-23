import * as React from "react";
import { IconProps } from "./types";

export const ProCheckboxMultipleLine = React.forwardRef<
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
        d="M13.707 12.707 8.5 17.914l-3.207-3.207 1.414-1.414L8.5 15.086l3.793-3.793z"
      />
      <path
        fill={color}
        d="M8 2 7 3v4H3L2 8v13l1 1h13l1-1v-4h4l1-1V3l-1-1zm9 13h3V4H9v3h7l1 1zM4 9v11h11V9z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default ProCheckboxMultipleLine;