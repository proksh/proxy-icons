import * as React from "react";
import { IconProps } from "./types";

export const ProSpeaker2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
        <path
          fill={color}
          d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm3 8a6 6 0 1 0 12 0 6 6 0 0 0-12 0"
        />
      </svg>
    );
  },
);

export default ProSpeaker2Fill;
