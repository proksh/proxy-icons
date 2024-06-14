import * as React from "react";
import { IconProps } from "./types";

export const ProGalleryView2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3 2 4v6l1 1h7l1-1V4l-1-1zm1 6V5h5v4zm10-6-1 1v6l1 1h7l1-1V4l-1-1zm1 6V5h5v4zM2 14l1-1h7l1 1v6l-1 1H3l-1-1zm2 1v4h5v-4zm10-2-1 1v6l1 1h7l1-1v-6l-1-1zm1 6v-4h5v4z"
        />
      </svg>
    );
  },
);

export default ProGalleryView2Line;
