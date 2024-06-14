import * as React from "react";
import { IconProps } from "./types";

export const ProTrafficLightLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 3.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        />
        <path
          fill={color}
          d="m7 3 1-1h8l1 1v1h3v1c0 .589-.375.975-.597 1.16-.25.206-.547.36-.809.47-.507.212-1.143.37-1.594.37v3h3v1c0 .588-.375.975-.597 1.16-.25.206-.547.36-.809.47-.507.212-1.143.37-1.594.37v3h3v1c0 .588-.375.975-.597 1.16-.25.206-.547.36-.809.47-.507.212-1.143.37-1.594.37v2l-1 1H8l-1-1v-2c-.452 0-1.087-.158-1.594-.37a3.3 3.3 0 0 1-.81-.47C4.376 17.974 4 17.587 4 17v-1h3v-3c-.452 0-1.087-.158-1.594-.37a3.3 3.3 0 0 1-.81-.47C4.376 11.974 4 11.587 4 11v-1h3V7c-.452 0-1.087-.158-1.594-.37a3.3 3.3 0 0 1-.81-.47C4.376 5.974 4 5.588 4 5V4h3zm2 1v16h6V4z"
        />
      </svg>
    );
  },
);

export default ProTrafficLightLine;
