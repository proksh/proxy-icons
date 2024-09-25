import * as React from "react";
import { IconProps } from "./types";

export const ProGalleryViewLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M6 7h5v4H6zm5 6H6v4h5zm2-6h5v4h-5zm5 6h-5v4h5z" />
        <path fill={color} d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm2 1v14h16V5z" />
      </svg>
    );
  },
);

export default ProGalleryViewLine;
