import * as React from "react";
import { IconProps } from "./types";

export const ProOmegaFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.5 11a5.5 5.5 0 1 1 11 0c0 1.16-.449 2.23-1.276 3.37-.61.839-1.369 1.645-2.224 2.508V20.5h7v-3h-3.458c.395-.445.77-.9 1.11-1.367C19.698 14.691 20.5 13.011 20.5 11a8.5 8.5 0 0 0-17 0c0 2.011.801 3.69 1.849 5.133.339.467.714.922 1.109 1.367H3v3h7v-3.622c-.855-.863-1.615-1.669-2.224-2.508C6.95 13.23 6.5 12.16 6.5 11"
        />
      </svg>
    );
  },
);

export default ProOmegaFill;
