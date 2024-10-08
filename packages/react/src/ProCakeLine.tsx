import * as React from "react";
import { IconProps } from "./types";

export const ProCakeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 6c.828 0 1.5-.696 1.5-1.555C13.5 3.5 13 2.5 12 2c0 .757-.382 1.005-.76 1.25-.372.24-.74.48-.74 1.195C10.5 5.304 11.172 6 12 6m-1 5V7h2v4h7l1 1v8h2v2H1v-2h2v-8l1-1zm8 9v-7H5v7z"
        />
      </svg>
    );
  },
);

export default ProCakeLine;
