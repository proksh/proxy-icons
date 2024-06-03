import * as React from "react";
import { IconProps } from "./types";

export const ProGalleryUploadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 3h3l1 1v16l-1 1H3l-1-1V4l1-1h3V1h2v2h8V1h2zM7.646 11.647 8 12.5h3V16h2v-3.5h3l.354-.854-4-4h-.707z"
        />
      </svg>
    );
  },
);

export default ProGalleryUploadFill;
