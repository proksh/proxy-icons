import * as React from "react";
import { IconProps } from "./types";

export const ProSettings2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="m14.894 4.616-.704-2.874-4.39.038-.693 2.836-.282.117-2.53-1.535-3.077 3.13 1.515 2.497-.117.282-2.874.703.038 4.39 2.836.693.117.282-1.535 2.53 3.13 3.077 2.497-1.515.282.117.703 2.874 4.39-.038.694-2.836.281-.117 2.53 1.535 3.077-3.13-1.515-2.497.117-.282 2.874-.703-.038-4.39-2.836-.693-.117-.282 1.535-2.53-3.13-3.077-2.497 1.515zm-4.086 1.46.566-2.31 1.25-.01.568 2.32 2.154.892 2.033-1.233.892.876-1.24 2.043.893 2.154 2.31.566.01 1.25-2.32.568-.892 2.154 1.233 2.033-.876.892-2.043-1.24-2.154.893-.566 2.31-1.25.01-.568-2.32-2.154-.892-2.033 1.233-.892-.876 1.24-2.043-.893-2.154-2.31-.566-.01-1.25 2.32-.568.893-2.154L5.735 6.62l.876-.892 2.043 1.24z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSettings2Line;