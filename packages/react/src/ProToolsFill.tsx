import * as React from "react";
import { IconProps } from "./types";

export const ProToolsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.203 5.324a3.5 3.5 0 0 0 4.474 4.474L18.94 21.06l2.12-2.122L9.799 7.676a3.5 3.5 0 0 0-4.474-4.474l2.282 2.283a1.5 1.5 0 0 1-2.121 2.12zm12.025 1.862.353-1.767 3.536-2.122 1.414 1.414-2.121 3.536-1.768.354z"
        />
        <path
          fill={color}
          d="m2.854 18.854 6.232-6.233 2.121 2.122-6.232 6.232zM12.975 9.44l1.414 1.413 2.253-2.252-1.414-1.415z"
        />
      </svg>
    );
  },
);

export default ProToolsFill;
