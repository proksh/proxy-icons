import * as React from "react";
import { IconProps } from "./types";

export const ProMarkPenLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m10.573 11.763 4.95-4.95 1.414 1.414-4.95 4.95z"
        />
        <path
          fill={color}
          d="m7.224 9.455 8.299-8.3 7.07 7.072-8.298 8.299-2.121.707-2.308 2.308-5.657-5.657 2.308-2.308zm1.748 1.08-.707 2.121-1.228 1.228 2.829 2.828 1.228-1.227 2.12-.707 6.551-6.551-4.242-4.243zm-4.409 5.824 2.828 2.828-1.414 1.414-4.243-1.414z"
        />
      </svg>
    );
  },
);

export default ProMarkPenLine;
