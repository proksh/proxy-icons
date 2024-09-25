import * as React from "react";
import { IconProps } from "./types";

export const ProTimeZoneLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4a7.97 7.97 0 0 0-5.105 1.84c.23.245.605.675.605.866 0 .265-.794 1.853-1.059 1.853-.132 0-.198-.265-.265-.53-.066-.264-.132-.529-.264-.529-.265 0-.794.53-.794.794 0 .132.132.53.264.927.133.397.265.794.265.926 0 .165-.98.725-1.607 1.053a8.1 8.1 0 0 0 .154 2.56c.415.169 1.015.449 1.188.622.133.133.199.397.265.662s.132.53.265.662c.098.098.307.16.53.226.376.112.793.236.793.568 0 .324-.222 1.111-.384 1.623a7.97 7.97 0 0 0 3.767 1.758c.36.797.866 1.514 1.483 2.119H12C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v.1a6.98 6.98 0 0 0-5-2.1 7 7 0 0 0-2.42.43c.007-.139-.06-.283-.198-.283-.264 0-.53 0-.53-.265 0-.112.192-.272.391-.44.27-.226.556-.466.404-.618-.162-.163-.525.074-.841.28-.2.13-.38.249-.482.249-.133 0-.331-.132-.53-.265-.198-.132-.397-.264-.53-.264-.132 0-.529.264-.926.529s-.794.53-.926.53c-.265 0-.53-.265-.53-.53s.53-1.324.795-1.324c.264 0 1.852 0 2.117-.264.265-.265.265-1.06 0-1.06-.093 0-.25.066-.428.14-.329.135-.724.297-.895.126-.186-.186 1.058-1.324 1.323-1.324h1.588c.161 0 .842-.42 1.33-.72l.013-.009A8 8 0 0 0 12 4"
        />
        <path
          fill={color}
          d="M13.994 10.677h-1.465c-.132 0-.264-.133-.397-.265-.132-.133-.264-.265-.397-.265-.264 0-2.911 1.059-2.911 1.324v1.588c0 .264 1.058 1.059 1.323 1.059.132 0 .33-.066.53-.133l.004-.001a7.03 7.03 0 0 1 3.313-3.307M18 14h-2v4h4v-2h-2z"
        />
        <path
          fill={color}
          d="M17 23a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8"
        />
      </svg>
    );
  },
);

export default ProTimeZoneLine;
