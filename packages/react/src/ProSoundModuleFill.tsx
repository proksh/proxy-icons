import * as React from "react";
import { IconProps } from "./types";

export const ProSoundModuleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 21v-3H1v-3h6v3H5v3zm2-8H3V3h2zm8-7h2v3H9V6h2V3h2zm10 9h-6v3h2v3h2v-3h2zm-4-2h2V3h-2zm-8 8V11h2v10z"
        />
      </svg>
    );
  },
);

export default ProSoundModuleFill;
