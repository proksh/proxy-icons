import * as React from "react";
import { IconProps } from "./types";

export const ProRoadMapLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 16.327c.5-.436.997-.87 1.475-1.33a30 30 0 0 0 1.778-1.858c.646-.738 1.314-1.59 1.826-2.453.497-.84.921-1.811.921-2.763C18 4.637 15.299 2 12 2S6 4.637 6 7.923c0 .952.424 1.924.921 2.763.512.864 1.18 1.715 1.826 2.453.65.743 1.296 1.394 1.778 1.858.478.46.976.894 1.475 1.33M8 7.922C8 5.771 9.776 4 12 4s4 1.771 4 3.923c0 .408-.201 1-.642 1.743-.425.718-1.007 1.466-1.61 2.157a29 29 0 0 1-1.66 1.733L12 13.64l-.088-.084a28 28 0 0 1-1.66-1.733c-.603-.69-1.185-1.44-1.61-2.157C8.202 8.923 8 8.331 8 7.923"
        />
        <path
          fill={color}
          d="M20 5.5v12.333l-4.962 2.068-6-3L4 19V7.5H2V22l6.962-2.9 6 3L22 19.166V5.5z"
        />
      </svg>
    );
  },
);

export default ProRoadMapLine;
