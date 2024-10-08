import * as React from "react";
import { IconProps } from "./types";

export const ProMapPinUserLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        />
        <path
          fill={color}
          d="M10.977 22.921a49 49 0 0 1-3.735-3.862c-1.02-1.185-2.063-2.536-2.856-3.894C3.608 13.83 3 12.373 3 11a9 9 0 0 1 18 0c0 1.373-.608 2.831-1.386 4.165-.793 1.358-1.835 2.709-2.856 3.894a49 49 0 0 1-3.735 3.862c-.336.31-.68.611-1.023.915-.342-.303-.687-.604-1.023-.915M12 4a7 7 0 0 0-7 7c0 .836.392 1.92 1.114 3.157q.326.557.712 1.118C8.006 13.865 9.922 13 12 13s3.994.864 5.174 2.275q.386-.56.712-1.118C18.608 12.92 19 11.837 19 11a7 7 0 0 0-7-7M8.12 16.885c.932 1.218 1.988 2.364 2.854 3.244.394.4.746.743 1.026 1.008.28-.265.631-.608 1.025-1.008.867-.88 1.922-2.026 2.855-3.244C15.177 15.812 13.752 15 12 15c-1.753 0-3.178.812-3.88 1.885"
        />
      </svg>
    );
  },
);

export default ProMapPinUserLine;
