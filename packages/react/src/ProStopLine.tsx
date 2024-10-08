import * as React from "react";
import { IconProps } from "./types";

export const ProStopLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m4 5 1-1h14l1 1v14l-1 1H5l-1-1zm2 1v12h12V6z" />
      </svg>
    );
  },
);

export default ProStopLine;
