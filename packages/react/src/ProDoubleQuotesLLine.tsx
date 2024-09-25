import * as React from "react";
import { IconProps } from "./types";

export const ProDoubleQuotesLLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.25 13.25h-2.828l2.105-8H16.52l-2.77 7.386v6.114h5.5zm-9 0H7.422l2.105-8H7.52l-2.77 7.386v6.114h5.5z"
        />
      </svg>
    );
  },
);

export default ProDoubleQuotesLLine;
