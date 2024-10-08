import * as React from "react";
import { IconProps } from "./types";

export const ProMarkdownLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.5 12.5h-2.063v-4h-1.874v4H13.5l2.992 3zM5 15.5v-7h1.914L9 10.586 11.086 8.5H13v7h-2v-4.086l-2 2-2-2V15.5z"
        />
        <path fill={color} d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm2 1v14h16V5z" />
      </svg>
    );
  },
);

export default ProMarkdownLine;
