import * as React from "react";
import { IconProps } from "./types";

export const ProXboxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.798 15.485c1.124-2.52 3.2-5.44 4.487-6.962-1.248-1.246-2.162-1.931-2.818-2.3A7.98 7.98 0 0 0 4.001 12c0 1.25.286 2.432.797 3.485m4.051-10.84c1.6.406 3.152 1.314 3.152 1.314v-.005s1.552-.904 3.151-1.31A8 8 0 0 0 12.001 4c-1.12 0-2.185.23-3.152.645m8.686 1.578c-.655.37-1.568 1.055-2.816 2.3 1.287 1.523 3.362 4.441 4.486 6.961A8 8 0 0 0 20 12c0-2.27-.946-4.32-2.466-5.777m.408 11.134c-1.403-2.237-4.09-4.945-5.942-6.344-1.85 1.4-4.539 4.108-5.941 6.345A7.98 7.98 0 0 0 12 20a7.98 7.98 0 0 0 5.942-2.643M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10"
        />
      </svg>
    );
  },
);

export default ProXboxLine;
