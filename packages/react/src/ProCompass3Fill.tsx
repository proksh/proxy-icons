import * as React from "react";
import { IconProps } from "./types";

export const ProCompass3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <path
          fill={color}
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m4.596 5.404L14.12 14.12l-6.717 2.475L9.878 9.88z"
        />
      </svg>
    );
  },
);

export default ProCompass3Fill;
