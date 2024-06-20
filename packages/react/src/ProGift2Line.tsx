import * as React from "react";
import { IconProps } from "./types";

export const ProGift2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.24 2.462A3.5 3.5 0 0 1 17.67 7H22v.903q.005.05.005.1v4q0 .05-.005.1V13h-.92l-.075.003h-1v8q0 .05-.005.1V22h-.92l-.075.003h-14L4.929 22H4v-8.997h-.995L2.929 13H2V7h4.337A3.5 3.5 0 0 1 12 3.05 3.5 3.5 0 0 1 14.5 2c.633 0 1.227.168 1.74.462M9.65 4.01l-.145-.007a1.5 1.5 0 0 0-.75 2.8c.22.125.474.197.745.197H11V5.5a1.5 1.5 0 0 0-1.35-1.49M14.5 7a1.5 1.5 0 0 0 .15-2.99l-.145-.007-.145.007a1.5 1.5 0 0 0-1.348 1.348l-.007.145V7zm5.5 4V9.003H4.005V11zm-2 9v-6.997H6.005V20z"
        />
      </svg>
    );
  },
);

export default ProGift2Line;
