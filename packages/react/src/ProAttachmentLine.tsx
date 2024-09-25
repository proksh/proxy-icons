import * as React from "react";
import { IconProps } from "./types";

export const ProAttachmentLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.5 6.75a5.25 5.25 0 0 1 10.5 0v8a3.25 3.25 0 0 1-6.5 0V7h2v7.75a1.25 1.25 0 1 0 2.5 0v-8a3.25 3.25 0 0 0-6.5 0v9a5.25 5.25 0 1 0 10.5 0V4h2v11.75a7.25 7.25 0 1 1-14.5 0z"
        />
      </svg>
    );
  },
);

export default ProAttachmentLine;
