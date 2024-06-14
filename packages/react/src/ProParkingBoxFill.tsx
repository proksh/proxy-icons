import * as React from "react";
import { IconProps } from "./types";

export const ProParkingBoxFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12.5 12H11V9h1.5a1.5 1.5 0 0 1 0 3" />
        <path
          fill={color}
          d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm6 3v10h2v-3h1.5a3.5 3.5 0 1 0 0-7z"
        />
      </svg>
    );
  },
);

export default ProParkingBoxFill;
