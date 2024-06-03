import * as React from "react";
import { IconProps } from "./types";

export const ProVoiceprintFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="M8.5 2v18h3V2zm12 8v4h3v-4zm-8 12V4h3v18zm4-15v10h3V7zm-12 10V7h3v10zm-4-7v4h3v-4z"
        />
      </svg>
    );
  },
);

export default ProVoiceprintFill;
