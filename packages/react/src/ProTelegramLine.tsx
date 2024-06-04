import * as React from "react";
import { IconProps } from "./types";

export const ProTelegramLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.001 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m-3.11-8.83-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.564-.23.886.061.703.79l-1.658 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871z"
        />
      </svg>
    );
  },
);

export default ProTelegramLine;
