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
          d="M3 2h12.914L21 7.086V22H3zm4 9.5A1.5 1.5 0 0 1 8.5 10H11v1H8.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H10v-1H9v-1h2v3H8.5A1.5 1.5 0 0 1 7 13.5zm5 3.5v-5h1v5zm5-5h-3v5h1v-2h2v-1h-2v-1h2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFileGifFill;
