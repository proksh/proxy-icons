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
          d="M20.838 6.97A9.99 9.99 0 0 0 12.193 2h-.054c-5.498.03-9.946 4.495-9.946 10 0 5.523 4.478 10 10 10s10-4.477 10-10q0-.262-.013-.52l.002-.001a9.94 9.94 0 0 0-1.344-4.51m-6.125-2.565-1.52 1.104V7.49l2.98 2.164 1.884-.612.58-1.785a8 8 0 0 0-3.924-2.853m5.48 7.644-1.518-1.104-1.884.613-1.15 3.54.969 1.333h2.245a7.96 7.96 0 0 0 1.338-4.382m-5.888 7.67.686-2.113-.995-1.37h-3.684L9.22 17.741l.62 1.907a8 8 0 0 0 2.354.352c.731 0 1.44-.098 2.112-.282m-8.682-3.154H7.6l1.12-1.542-1.126-3.466-1.63-.53-1.766 1.284a7.96 7.96 0 0 0 1.424 4.254m.285-9.515.675 2.075 1.63.53 2.98-2.165V5.51l-1.52-1.105A8 8 0 0 0 5.908 7.05m3.656 4.096 1.005 3.09h3.249l1.004-3.09-2.629-1.91z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFootballLine;
