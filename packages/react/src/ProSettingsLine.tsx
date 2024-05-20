import * as React from "react";
import { IconProps } from "./types";

export const ProSettingsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.693 2.34H9.307l-.585 1.898L6.917 5.28l-1.936-.442-2.693 4.664 1.35 1.456v2.084l-1.35 1.456 2.693 4.664 1.936-.442 1.805 1.042.585 1.898h5.386l.585-1.898 1.805-1.042 1.937.442 2.693-4.664-1.352-1.456v-2.084l1.352-1.456-2.693-4.664-1.937.442-1.805-1.042zm-4.291 3.238.381-1.238h2.434l.381 1.238 3.165 1.827 1.263-.289 1.217 2.108-.882.95v3.653l.881.95-1.216 2.107-1.263-.288-3.165 1.826-.381 1.238h-2.434l-.381-1.238-3.165-1.826-1.262.288-1.217-2.108.88-.949v-3.654l-.88-.95 1.217-2.107 1.262.289z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSettingsLine;
