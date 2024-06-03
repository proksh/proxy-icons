import * as React from "react";
import { IconProps } from "./types";

export const ProMicOffLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 10a8.96 8.96 0 0 1-1.447 4.896l-1.455-1.456A6.97 6.97 0 0 0 19 10zm-4.314 7.686A8.9 8.9 0 0 1 13 18.946V23h-2v-4.055A9 9 0 0 1 3 10h2a7 7 0 0 0 10.218 6.218l-1.515-1.515A5 5 0 0 1 7 10V8L2 3l1.414-1.414 19 19L21 22zM12 13l-3-3a3 3 0 0 0 3 3m5-3c0 .691-.14 1.35-.394 1.949l-1.623-1.623Q15 10.166 15 10V6a3 3 0 0 0-5.684-1.341l-1.459-1.46A5 5 0 0 1 17 6z"
        />
      </svg>
    );
  },
);

export default ProMicOffLine;
