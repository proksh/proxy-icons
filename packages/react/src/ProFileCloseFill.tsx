import * as React from "react";
import { IconProps } from "./types";

export const ProFileCloseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h12.914L21 7.086V14l-.768-.768L18 15.464l-2.232-2.232-3.535 3.536L14.465 19l-2.233 2.232L13 22H3z"
        />
        <path
          fill={color}
          d="m16.586 19-2.293-2.293 1.414-1.414L18 17.586l2.293-2.293 1.414 1.414L19.414 19l2.293 2.293-1.414 1.414L18 20.414l-2.293 2.293-1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProFileCloseFill;
