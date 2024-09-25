import * as React from "react";
import { IconProps } from "./types";

export const ProFlutterLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.598 10.684h2.828l-5.657 5.658 5.657 5.656h-2.828L8.94 16.341zm-.194-8.68h2.829L5.919 13.318l-1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProFlutterLine;
