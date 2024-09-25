import * as React from "react";
import { IconProps } from "./types";

export const ProSettingsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.307 2.34h5.386l.585 1.898 1.805 1.042 1.937-.442 2.693 4.664-1.352 1.456v2.084l1.352 1.456-2.693 4.664-1.937-.442-1.805 1.042-.585 1.898H9.307l-.585-1.898-1.805-1.042-1.936.442-2.693-4.664 1.35-1.456v-2.084l-1.35-1.456L4.98 4.838l1.936.442 1.805-1.042zM8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0"
        />
      </svg>
    );
  },
);

export default ProSettingsFill;
