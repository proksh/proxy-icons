import * as React from "react";
import { IconProps } from "./types";

export const ProFileGifFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h12.914L21 7.086V22H3zm4 9.5v2A1.5 1.5 0 0 0 8.5 15H11v-3H9v1h1v1H8.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5H11v-1H8.5A1.5 1.5 0 0 0 7 11.5m5 3.5h1v-5h-1zm5-5h-3v5h1v-2h2v-1h-2v-1h2z"
        />
      </svg>
    );
  },
);

export default ProFileGifFill;
