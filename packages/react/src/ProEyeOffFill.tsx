import * as React from "react";
import { IconProps } from "./types";

export const ProEyeOffFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.223 16.777 2.5 20.5l1.414 1.414 18-18L20.5 2.5l-3.796 3.796C15.404 5.283 13.861 4.5 12 4.5c-2.384 0-4.245 1.285-5.744 2.691-.717.674-1.387 1.41-2.004 2.088l-.09.099c-.655.72-1.244 1.361-1.823 1.872l-.85.75.85.75c.579.51 1.168 1.152 1.824 1.872l.09.098c.607.668 1.265 1.392 1.97 2.057m3.215-3.215a3 3 0 0 1 4.124-4.124zM12 19.5a6.6 6.6 0 0 1-2.393-.45l9.964-9.965.266.293c.656.72 1.245 1.361 1.824 1.872l.85.75-.85.75c-.579.51-1.168 1.152-1.824 1.872l-.09.098c-.616.68-1.286 1.415-2.003 2.089C16.245 18.215 14.384 19.5 12 19.5"
        />
      </svg>
    );
  },
);

export default ProEyeOffFill;
