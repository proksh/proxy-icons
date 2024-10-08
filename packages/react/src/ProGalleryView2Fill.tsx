import * as React from "react";
import { IconProps } from "./types";

export const ProGalleryView2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3 2 4v6l1 1h7l1-1V4l-1-1zm11 0-1 1v6l1 1h7l1-1V4l-1-1zM3 13l-1 1v6l1 1h7l1-1v-6l-1-1zm11 0-1 1v6l1 1h7l1-1v-6l-1-1z"
        />
      </svg>
    );
  },
);

export default ProGalleryView2Fill;
