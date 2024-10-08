import * as React from "react";
import { IconProps } from "./types";

export const ProPenNibFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m14.154 5.254-6.584.44-.098.823v.003l-.003.016-.009.068q-.011.091-.038.273a36 36 0 0 1-.978 4.43c-.784 2.7-2.053 5.767-3.99 7.703l1.06 1.061 5.847-5.846a2 2 0 1 1 1.414 1.414L4.93 21.485l1.06 1.06c1.937-1.936 5.004-3.205 7.704-3.989a36 36 0 0 1 4.43-.978l.273-.038.068-.01.016-.001h.004l.823-.1.439-6.583zm7.038 4.21-5.656-5.656.707-2.122 7.07 7.071z"
        />
      </svg>
    );
  },
);

export default ProPenNibFill;
