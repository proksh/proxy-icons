import * as React from "react";
import { IconProps } from "./types";

export const ProSoundModuleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 21v-3H1v-2h6v2H5v3zm2-7H3V3h2zm8-8h2v2H9V6h2V3h2zm10 10h-6v2h2v3h2v-3h2zm-4-2h2V3h-2zm-8 7V10h2v11z"
        />
      </svg>
    );
  },
);

export default ProSoundModuleLine;
