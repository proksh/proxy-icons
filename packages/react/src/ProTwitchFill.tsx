import * as React from "react";
import { IconProps } from "./types";

export const ProTwitchFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.001 3v11.74l-4.696 4.695h-3.913l-2.437 2.348H6.914v-2.348H3.001V6.13L4.228 3zm-1.565 1.565H6.13v11.74h3.13v2.347l2.349-2.348h4.695l3.13-3.13zm-3.13 3.13v4.696H14.74V7.696zm-3.914 0v4.696h-1.565V7.696z"
        />
      </svg>
    );
  },
);

export default ProTwitchFill;
