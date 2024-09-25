import * as React from "react";
import { IconProps } from "./types";

export const ProVideoDownloadLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 12.586V8H8v4.586l-1.793-1.793-1.414 1.414L9 16.414l4.207-4.207-1.414-1.414z"
        />
        <path
          fill={color}
          d="M17 4H1v16h16v-5.132l6 4V5.132l-6 4zm0 7.535 4-2.667v6.264l-4-2.667zM15 6v12H3V6z"
        />
      </svg>
    );
  },
);

export default ProVideoDownloadLine;
