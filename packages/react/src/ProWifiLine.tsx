import * as React from "react";
import { IconProps } from "./types";

export const ProWifiLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.755 6.944A17.92 17.92 0 0 1 12 3c4.254 0 8.164 1.476 11.245 3.944l-1.25 1.562A15.93 15.93 0 0 0 12 5a15.93 15.93 0 0 0-9.996 3.506zm19.366 3.904A12.95 12.95 0 0 0 12 8a12.95 12.95 0 0 0-8.122 2.848l1.25 1.562A10.95 10.95 0 0 1 12 10c2.6 0 4.989.902 6.872 2.41zm-3.123 3.905A7.97 7.97 0 0 0 12 13a7.97 7.97 0 0 0-4.998 1.753l1.25 1.562A5.98 5.98 0 0 1 12 15c1.418 0 2.721.492 3.748 1.315zm-3.124 3.904A3 3 0 0 0 12 18c-.71 0-1.36.246-1.874.657L12 21z"
        />
      </svg>
    );
  },
);

export default ProWifiLine;
