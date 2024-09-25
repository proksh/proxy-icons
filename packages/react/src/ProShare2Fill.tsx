import * as React from "react";
import { IconProps } from "./types";

export const ProShare2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 16a3.98 3.98 0 0 0 2.921-1.267l4.2 2.29A4 4 0 0 0 13 18c0 .552.112 1.078.314 1.557a4 4 0 0 0 1.79 1.966c.565.304 1.21.477 1.896.477.552 0 1.078-.112 1.557-.314a4 4 0 0 0 1.99-1.835c.29-.554.453-1.183.453-1.851 0-.552-.112-1.078-.314-1.557a4.02 4.02 0 0 0-1.886-2.016A4 4 0 0 0 17 14a4 4 0 0 0-2.921 1.268l-4.2-2.29a4 4 0 0 0 0-1.955l4.2-2.29q.205.219.441.406A4 4 0 1 0 17.013 2H17a4 4 0 0 0-3.88 4.977l-4.199 2.29A3.98 3.98 0 0 0 6 8a4 4 0 1 0 0 8"
        />
      </svg>
    );
  },
);

export default ProShare2Fill;
