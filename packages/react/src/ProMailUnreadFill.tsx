import * as React from "react";
import { IconProps } from "./types";

export const ProMailUnreadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 2q.515 0 1-.1V21H2V6.536l10 7.728 7.23-5.587A5 5 0 0 0 21 9"
        />
        <path
          fill={color}
          d="M12 11.736 2 4.01V3h14.1q-.1.486-.1 1c0 1.374.555 2.62 1.452 3.523z"
        />
      </svg>
    );
  },
);

export default ProMailUnreadFill;
