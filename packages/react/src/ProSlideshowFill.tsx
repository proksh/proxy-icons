import * as React from "react";
import { IconProps } from "./types";

export const ProSlideshowFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h20v2H2z" />
        <path
          fill={color}
          d="M22 6H2v15h9v2h2v-2h9zm-10.506 8.667q.202-.301.325-.64l.01-.027c.112-.32.171-.658.171-1H9v-3a3 3 0 0 0-.976.163L8 10.172a3 3 0 0 0-1.942 3.413 3 3 0 0 0 5.436 1.082M13 10h5v2h-5zm0 4h5v2h-5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSlideshowFill;
