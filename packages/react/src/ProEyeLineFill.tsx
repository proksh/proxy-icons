import * as React from "react";
import { IconProps } from "./types";

export const ProEyeLineFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.256 7.191C7.755 5.785 9.616 4.5 12 4.5s4.245 1.285 5.744 2.691c.717.674 1.387 1.41 2.004 2.088l.09.099c.655.72 1.244 1.361 1.823 1.872l.85.75-.85.75c-.579.51-1.168 1.152-1.824 1.872l-.09.098c-.616.68-1.286 1.415-2.003 2.089C16.245 18.215 14.384 19.5 12 19.5s-4.245-1.285-5.744-2.691c-.717-.674-1.387-1.41-2.004-2.089l-.09-.098c-.655-.72-1.244-1.361-1.823-1.872l-.85-.75.85-.75c.579-.51 1.168-1.152 1.824-1.872l.09-.098c.616-.68 1.286-1.415 2.003-2.089M13 11V9h-1a3 3 0 1 0 3 3v-1z"
        />
      </svg>
    );
  },
);

export default ProEyeLineFill;
