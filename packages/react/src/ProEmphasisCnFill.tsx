import * as React from "react";
import { IconProps } from "./types";

export const ProEmphasisCnFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.5 3.5V2h-3v1.5H5v3h9.15a15.7 15.7 0 0 1-2.064 3.42A19 19 0 0 1 11 8.447V8.5H7.544c.556 1.07 1.399 2.346 2.453 3.601-1.383 1.186-3.03 2.159-4.917 2.709l.84 2.88c2.395-.698 4.454-1.929 6.16-3.423 1.68 1.516 3.74 2.86 6.056 3.438l.728-2.91c-1.671-.418-3.279-1.422-4.694-2.683 1.499-1.817 2.573-3.801 3.196-5.612H19v-3zM8 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m11 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
      </svg>
    );
  },
);

export default ProEmphasisCnFill;
