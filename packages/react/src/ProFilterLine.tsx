import * as React from "react";
import { IconProps } from "./types";

export const ProFilterLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.724 5.63 3.5 4h17l.776 1.63L15 13.356V21l-1 1h-4l-1-1v-7.645zM5.6 6l5.175 6.37L11 13v7h2v-7l.224-.63L18.399 6z"
        />
      </svg>
    );
  },
);

export default ProFilterLine;
