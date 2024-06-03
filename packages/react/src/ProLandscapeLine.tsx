import * as React from "react";
import { IconProps } from "./types";

export const ProLandscapeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m17.18 13L14.5 5.9l-3.444 6.359L9 8.353 2.344 21zm-3.359-2h-4.717l-2.427-4.611 2.323-4.29zM5.656 19 9 12.647 12.344 19z"
        />
      </svg>
    );
  },
);

export default ProLandscapeLine;
