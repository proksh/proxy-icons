import * as React from "react";
import { IconProps } from "./types";

export const ProVolumeOffVibrateLine = React.forwardRef<
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
        d="M13 9.343V2.919L9.431 5.774l1.423 1.423.146-.116v.262zM13 15l1 1 1.414-1.414-11-11L3 5l3 3H2v8h4.65L13 21.08zM7.711 9.712 11 13v3.92L7.35 14H4v-4h3.35zm8.582-3.419 3-3 1.414 1.414L18.414 7l1.793 1.793v1.414L18.414 12l1.793 1.793v1.414L18.414 17l2.293 2.293-1.414 1.414-3-3v-1.414l1.793-1.793-1.793-1.793v-1.414L18.086 9.5l-1.793-1.793z"
      />
    </svg>
  );
});

export default ProVolumeOffVibrateLine;
