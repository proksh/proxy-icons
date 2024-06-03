import * as React from "react";
import { IconProps } from "./types";

export const ProWifiOffLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.583 15.583 19 20l1.414-1.414-17-17L2 3l1.914 1.914a18 18 0 0 0-3.16 2.03l1.25 1.562a16 16 0 0 1 3.41-2.092L7.72 8.721a13 13 0 0 0-3.843 2.127l1.25 1.562a11 11 0 0 1 4.199-2.083L12 13a7.97 7.97 0 0 0-4.998 1.753l1.25 1.562A5.98 5.98 0 0 1 12 15c.925 0 1.8.21 2.583.583m4.289-3.173a11 11 0 0 0-3.772-1.967l-2.426-2.426a12.94 12.94 0 0 1 7.447 2.831zM12 5q-1.117 0-2.194.15L8.084 3.426A18 18 0 0 1 12 3c4.254 0 8.164 1.476 11.245 3.944l-1.25 1.562A15.93 15.93 0 0 0 12 5m1.874 13.657A3 3 0 0 0 12 18c-.71 0-1.36.246-1.874.657L12 21z"
        />
      </svg>
    );
  },
);

export default ProWifiOffLine;
