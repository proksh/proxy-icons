import * as React from "react";
import { IconProps } from "./types";

export const ProDeviceRecoverLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 9a3 3 0 1 0 0 6v2a5 5 0 1 1 4.614-3.072v.002a5.02 5.02 0 0 1-1.987 2.325L12.5 12H15a3 3 0 0 0-3-3"
        />
        <path fill={color} d="m4 3 1-1h14l1 1v18l-1 1H5l-1-1zm2 1v16h12V4z" />
      </svg>
    );
  },
);

export default ProDeviceRecoverLine;
