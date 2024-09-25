import * as React from "react";
import { IconProps } from "./types";

export const ProShadowLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 2v4h4v16H6v-4H2V2zm0 6v1.086l2 2V8zm0 3.914v2.172l2 2v-2.172zm0 5V18h-1.086l2 2H20v-1.086zM14.086 18h-2.172l2 2h2.172zm-5 0H8v2h3.086zM4 16h12V4H4z"
        />
      </svg>
    );
  },
);

export default ProShadowLine;
