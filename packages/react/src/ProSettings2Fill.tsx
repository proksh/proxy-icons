import * as React from "react";
import { IconProps } from "./types";

export const ProSettings2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m14.19 1.742.703 2.874.282.117 2.496-1.515 3.131 3.077-1.535 2.53.117.282 2.836.694.038 4.389-2.874.703-.117.282 1.515 2.497-3.077 3.13-2.53-1.535-.282.117-.694 2.836-4.389.038-.703-2.874-.282-.117-2.496 1.515-3.131-3.077 1.535-2.53-.117-.282L1.78 14.2l-.038-4.39 2.874-.703.117-.282-1.515-2.496 3.077-3.131 2.53 1.535.282-.117L9.8 1.78zM8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0"
        />
      </svg>
    );
  },
);

export default ProSettings2Fill;
