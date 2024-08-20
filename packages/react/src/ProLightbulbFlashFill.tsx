import * as React from "react";
import { IconProps } from "./types";

export const ProLightbulbFlashFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 10a8 8 0 1 1 12.671 6.495c-.45.324-.671.736-.671 1.095V18H8v-.41c0-.359-.221-.77-.671-1.095A7.99 7.99 0 0 1 4 10m4.5 2H11v4l4.5-6H13V6zM8 20v2l1 1h6l1-1v-2z"
        />
      </svg>
    );
  },
);

export default ProLightbulbFlashFill;