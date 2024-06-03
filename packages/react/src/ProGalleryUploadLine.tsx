import * as React from "react";
import { IconProps } from "./types";

export const ProGalleryUploadLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 11.414V16h-2v-4.586l-1.793 1.793-1.414-1.414L12 7.586l4.207 4.207-1.414 1.414z"
        />
        <path
          fill={color}
          d="M21 3h-3V1h-2v2H8V1H6v2H3L2 4v16l1 1h18l1-1V4zM4 5h16v14H4z"
        />
      </svg>
    );
  },
);

export default ProGalleryUploadLine;
