import * as React from "react";
import { IconProps } from "./types";

export const ProInstallFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15 17h2v2h-2z" />
        <path
          fill={color}
          d="m3 3 1-1h7v4H8l-.707 1.707 4 4h1.414l4-4L16 6h-3V2h7l1 1v18l-1 1H4l-1-1zm2 13v4h14v-4z"
        />
      </svg>
    );
  },
);

export default ProInstallFill;
