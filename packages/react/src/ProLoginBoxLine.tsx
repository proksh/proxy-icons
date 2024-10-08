import * as React from "react";
import { IconProps } from "./types";

export const ProLoginBoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4 3 1-1h14l1 1v18l-1 1H5l-1-1v-6h2v5h12V4H6v5H4z"
        />
        <path
          fill={color}
          d="M11.086 13H2v-2h9.086L9.293 9.207l1.414-1.414L14.914 12l-4.207 4.207-1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProLoginBoxLine;
