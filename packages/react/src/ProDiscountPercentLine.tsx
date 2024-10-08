import * as React from "react";
import { IconProps } from "./types";

export const ProDiscountPercentLine = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M9.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-6.793 1.707 7-7-1.414-1.414-7 7z"
      />
      <path
        fill={color}
        d="M9.702 2.793a2.977 2.977 0 0 1 4.597 0c.63.766 1.6 1.167 2.586 1.071a2.977 2.977 0 0 1 3.25 3.251 2.98 2.98 0 0 0 1.072 2.586 2.977 2.977 0 0 1 0 4.598 2.98 2.98 0 0 0-1.071 2.586 2.977 2.977 0 0 1-3.25 3.25 2.98 2.98 0 0 0-2.587 1.072 2.977 2.977 0 0 1-4.597 0 2.98 2.98 0 0 0-2.587-1.071 2.977 2.977 0 0 1-3.25-3.251 2.98 2.98 0 0 0-1.072-2.587 2.977 2.977 0 0 1 0-4.597 2.98 2.98 0 0 0 1.072-2.586 2.977 2.977 0 0 1 3.25-3.25 2.98 2.98 0 0 0 2.587-1.072m-2.78 3.062a.977.977 0 0 0-1.067 1.067 4.98 4.98 0 0 1-1.79 4.324.977.977 0 0 0 0 1.508 4.98 4.98 0 0 1 1.79 4.324.977.977 0 0 0 1.067 1.067c1.65-.16 3.27.511 4.324 1.791a.977.977 0 0 0 1.508 0 4.98 4.98 0 0 1 4.324-1.791.977.977 0 0 0 1.067-1.067 4.98 4.98 0 0 1 1.791-4.324.977.977 0 0 0 0-1.508 4.98 4.98 0 0 1-1.79-4.324.977.977 0 0 0-1.068-1.067 4.98 4.98 0 0 1-4.323-1.791.977.977 0 0 0-1.51 0 4.98 4.98 0 0 1-4.323 1.791"
      />
    </svg>
  );
});

export default ProDiscountPercentLine;
