import * as React from "react";
import { IconProps } from "./types";

export const ProVolumeOffVibrateFill = React.forwardRef<
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
        d="M13 9.343V2.919L9.431 5.774zM6 8 3 5l1.414-1.414 11 11L14 16l-1-1v6.08L6.65 16H2V8zm10.293-1.707 3-3 1.414 1.414L18.414 7l1.793 1.793v1.414L18.414 12l1.793 1.793v1.414L18.414 17l2.293 2.293-1.414 1.414-3-3v-1.414l1.793-1.793-1.793-1.793v-1.414L18.086 9.5l-1.793-1.793z"
      />
    </svg>
  );
});

export default ProVolumeOffVibrateFill;
