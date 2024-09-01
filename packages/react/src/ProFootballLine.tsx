import * as React from "react";
import { IconProps } from "./types";

export const ProFootballLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.838 6.97A9.99 9.99 0 0 0 12.193 2h-.054c-5.498.03-9.946 4.495-9.946 10 0 5.523 4.478 10 10 10s10-4.477 10-10q0-.262-.013-.52l.002-.001a9.94 9.94 0 0 0-1.344-4.51m-6.125-2.565a8 8 0 0 1 3.924 2.853l-.58 1.785-1.884.612-2.98-2.164V5.509zm5.48 7.644a7.96 7.96 0 0 1-1.338 4.382H16.61l-.97-1.334 1.15-3.54 1.885-.612zm-5.888 7.67a8 8 0 0 1-2.112.281c-.82 0-1.61-.123-2.354-.352l-.62-1.907 1.094-1.505h3.683l.995 1.37zm-8.682-3.154a7.96 7.96 0 0 1-1.424-4.255l1.766-1.282 1.63.53 1.126 3.465-1.12 1.542zm.285-9.515a8 8 0 0 1 3.765-2.645l1.52 1.105v1.98l-2.98 2.165-1.63-.53zm3.656 4.096 2.63-1.91 2.628 1.91-1.004 3.09h-3.25z"
        />
      </svg>
    );
  },
);

export default ProFootballLine;
