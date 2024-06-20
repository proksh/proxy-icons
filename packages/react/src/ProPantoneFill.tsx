import * as React from "react";
import { IconProps } from "./types";

export const ProPantoneFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5.626 5.9-.55 1.31 5.74 13.858 1.355.52 8.76-4.186.507-1.25-5-13.5-1.312-.58zm5.624 2.6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 20v-6.64L9.164 21H7zm-3.945-2.318L4.5 10.646v8.97l-1.84-.665z"
        />
      </svg>
    );
  },
);

export default ProPantoneFill;
