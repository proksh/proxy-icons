import * as React from "react";
import { IconProps } from "./types";

export const ProFileCloseLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15 8h4v5.5h2V7l-5-5H3v20h10v-2H5V4h10z" />
        <path
          fill={color}
          d="m19.414 19 2.293 2.293-1.414 1.414L18 20.414l-2.293 2.293-1.414-1.414L16.586 19l-2.293-2.293 1.414-1.414L18 17.586l2.293-2.293 1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProFileCloseLine;
