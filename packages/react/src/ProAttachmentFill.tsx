import * as React from "react";
import { IconProps } from "./types";

export const ProAttachmentFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 6.75a5.75 5.75 0 1 1 11.5 0v8a3.75 3.75 0 1 1-7.5 0V7h3v7.75a.75.75 0 0 0 1.5 0v-8a2.75 2.75 0 1 0-5.5 0v9a4.75 4.75 0 1 0 9.5 0V4h3v11.75a7.75 7.75 0 0 1-15.5 0z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProAttachmentFill;
