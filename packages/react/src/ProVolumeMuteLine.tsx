import * as React from "react";
import { IconProps } from "./types";

export const ProVolumeMuteLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2.92v18.16L5.65 16H1V8h4.65zm-2 4.16L6.35 10H3v4h3.35L10 16.92zM17.586 12l-3.293-3.293 1.414-1.414L19 10.586l3.293-3.293 1.414 1.414L20.414 12l3.293 3.293-1.414 1.414L19 13.414l-3.293 3.293-1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProVolumeMuteLine;
