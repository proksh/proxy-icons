import * as React from "react";
import { IconProps } from "./types";

export const ProFolderImageFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3v18h20V5h-9.586l-2-2zm8 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.5.5 4.5 6H7z"
        />
      </svg>
    );
  },
);

export default ProFolderImageFill;
