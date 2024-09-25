import * as React from "react";
import { IconProps } from "./types";

export const ProSettings3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5.2 20.776 1.572-2.72A8 8 0 0 1 4.14 13.5H1v-3h3.14a8 8 0 0 1 2.632-4.555L5.2 3.224l2.598-1.5 1.57 2.719A8 8 0 0 1 12 4c.922 0 1.807.156 2.631.443l1.57-2.72 2.598 1.5-1.57 2.722a8 8 0 0 1 2.63 4.555H23v3h-3.14a8 8 0 0 1-2.632 4.555l1.571 2.721-2.598 1.5-1.57-2.719A8 8 0 0 1 12 20a8 8 0 0 1-2.631-.443l-1.57 2.72zM15 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0"
        />
      </svg>
    );
  },
);

export default ProSettings3Fill;
