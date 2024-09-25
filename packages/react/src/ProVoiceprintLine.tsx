import * as React from "react";
import { IconProps } from "./types";

export const ProVoiceprintLine = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="M9 20V2h2v18zm8-13v10h2V7zm4 3v4h2v-4zm-8-6v18h2V4zM5 17V7h2v10zm-4-7v4h2v-4z"
        />
      </svg>
    );
  },
);

export default ProVoiceprintLine;
