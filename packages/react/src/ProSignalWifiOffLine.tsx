import * as React from "react";
import { IconProps } from "./types";

export const ProSignalWifiOffLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.589 16.589 18.999 20l1.415-1.414-17-17L2 3l1.914 1.914q-1.216.613-2.32 1.396L1.39 7.748 12 21.108zm-1.424-1.424L12 17.892 3.635 7.358q.856-.526 1.779-.944zM12 3a18 18 0 0 0-3.916.427L9.806 5.15Q10.883 5.001 12 5c3.067 0 5.931.862 8.365 2.358l-3.696 4.654 1.424 1.423 4.516-5.687-.204-1.438A17.9 17.9 0 0 0 12 3"
        />
      </svg>
    );
  },
);

export default ProSignalWifiOffLine;
