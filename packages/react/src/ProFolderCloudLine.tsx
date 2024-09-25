import * as React from "react";
import { IconProps } from "./types";

export const ProFolderCloudLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.414 3H2v18h8v-2H4V5h5.586l2 2H20v4h2V5h-9.586z"
        />
        <path
          fill={color}
          d="M17.5 12a4 4 0 0 1 3.88 3.024A3 3 0 0 1 21 21h-7a3 3 0 0 1-.38-5.976A4 4 0 0 1 17.5 12m2 4a2 2 0 1 0-4 0v1H14a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-1.5z"
        />
      </svg>
    );
  },
);

export default ProFolderCloudLine;
