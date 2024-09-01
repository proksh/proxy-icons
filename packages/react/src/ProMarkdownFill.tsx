import * as React from "react";
import { IconProps } from "./types";

export const ProMarkdownFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm3 4.5v7h2v-4.086l2 2 2-2V15.5h2v-7h-1.914L9 10.586 6.914 8.5zm14.5 4h-2.063v-4h-1.874v4H13.5l2.992 3z"
        />
      </svg>
    );
  },
);

export default ProMarkdownFill;
