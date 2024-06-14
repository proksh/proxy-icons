import * as React from "react";
import { IconProps } from "./types";

export const ProGalleryViewFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm4 3v4h5V7zm7 0v4h5V7zm5 6h-5v4h5zM6 13v4h5v-4z"
        />
      </svg>
    );
  },
);

export default ProGalleryViewFill;
