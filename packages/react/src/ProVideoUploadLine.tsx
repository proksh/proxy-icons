import * as React from "react";
import { IconProps } from "./types";

export const ProVideoUploadLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 11.414V16H8v-4.586l-1.793 1.793-1.414-1.414L9 7.586l4.207 4.207-1.414 1.414z"
        />
        <path
          fill={color}
          d="M17 4v5.131l6-4V18.87l-6-4V20H1V4zm0 7.535v.93l4 2.667V8.868zM15 6H3v12h12z"
        />
      </svg>
    );
  },
);

export default ProVideoUploadLine;
