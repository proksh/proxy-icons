import * as React from "react";
import { IconProps } from "./types";

export const ProHammerLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m8.5 2-.447.106L2.5 4.882V9H9v13l1 1h4l1-1V9h5l1-1V3l-1-1zM15 4v3h-2v14h-2V7H4.5v-.882L8.736 4zm2 3h2V4h-2z"
        />
      </svg>
    );
  },
);

export default ProHammerLine;
