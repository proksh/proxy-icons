import * as React from "react";
import { IconProps } from "./types";

export const ProQuillPenFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 22c0-1.332.317-2.277.771-2.973.458-.7 1.1-1.215 1.853-1.611.758-.4 1.6-.666 2.43-.882.263-.069.542-.136.82-.202.527-.127 1.05-.252 1.442-.383 2.542-.847 4.481-2.808 5.578-5.002l.323-.644-1.263-1.263c1.026-1.012 1.914-2.233 2.572-3.245a29 29 0 0 0 1.34-2.294l.02-.038.006-.01.002-.006L21.618 2H20C13.552 2 9.27 5.653 6.648 9.913 4.047 14.141 3 19.074 3 22zM20 3l.894.447z"
        />
      </svg>
    );
  },
);

export default ProQuillPenFill;
