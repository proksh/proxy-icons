import * as React from "react";
import { IconProps } from "./types";

export const ProUserUnfollowFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M8 14a5 5 0 0 0-5 5v3h11l-1.121-1.121L14.757 19l-1.878-1.879L15.999 14zm13.121 8.536L19 20.414l-2.121 2.122-1.415-1.415L17.587 19l-2.121-2.121 1.414-1.415L19 17.587l2.121-2.121 1.415 1.414L20.414 19l2.121 2.121z"
        />
      </svg>
    );
  },
);

export default ProUserUnfollowFill;
