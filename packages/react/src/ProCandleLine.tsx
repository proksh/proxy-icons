import * as React from "react";
import { IconProps } from "./types";

export const ProCandleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11.601.797.211-.211.204.203c.333.331.665.662.98 1.01.277.309.648.743 1.023 1.242a11.3 11.3 0 0 1 1.061 1.676c.292.584.545 1.275.545 1.97 0 1.691-1.1 3.125-2.625 3.624V12h5l1 1v7h2v2H3v-2h2v-7l1-1h5v-1.587a3.814 3.814 0 0 1-3-3.726c0-.695.253-1.386.545-1.97.3-.6.69-1.18 1.061-1.676.375-.5.746-.933 1.024-1.241.311-.346.641-.675.971-1.003m-.395 3.444a9.3 9.3 0 0 0-.872 1.37c-.236.471-.334.834-.334 1.077a1.813 1.813 0 0 0 3.625 0c0-.243-.098-.606-.334-1.077a9.3 9.3 0 0 0-.872-1.37 16 16 0 0 0-.607-.756 16 16 0 0 0-.606.756M7 20h10v-6H7z"
        />
      </svg>
    );
  },
);

export default ProCandleLine;
