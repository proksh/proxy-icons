import * as React from "react";
import { IconProps } from "./types";

export const ProParagraphLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 4a6 6 0 1 0 0 12v5h2V6h3v15h2V6h3V4zm-4 6a4 4 0 0 1 4-4v8a4 4 0 0 1-4-4"
        />
      </svg>
    );
  },
);

export default ProParagraphLine;
