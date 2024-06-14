import * as React from "react";
import { IconProps } from "./types";

export const ProMailSendLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m20 7.227-8 7.111L2 5.449V3h20v18H2v-2h18zM4.505 5 12 11.662 19.495 5z"
        />
        <path fill={color} d="M0 10h5v2H0zm8 4H0v2h8z" />
      </svg>
    );
  },
);

export default ProMailSendLine;
