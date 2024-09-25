import * as React from "react";
import { IconProps } from "./types";

export const ProRewindLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.985 5.143 22.5 6v12l-1.515.858-8.485-5.092V18l-1.515.858-10-6v-1.716l10-6L12.5 6v4.234zM13.444 12l7.056 4.234V7.766zm-10 0 7.056 4.234V7.766z"
        />
      </svg>
    );
  },
);

export default ProRewindLine;
