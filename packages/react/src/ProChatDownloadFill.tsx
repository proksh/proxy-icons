import * as React from "react";
import { IconProps } from "./types";

export const ProChatDownloadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm11.246 7.992V6.985h-2.5v4.007H7.995l3.991 4 4.012-4z"
        />
      </svg>
    );
  },
);

export default ProChatDownloadFill;
