import * as React from "react";
import { IconProps } from "./types";

export const ProShoppingBasket2Fill = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M7.74 9h8.519l-2.623-4.496 1.727-1.008L18.573 9H22v2h-1.095l-.91 9.1L19 21H5l-.995-.9-.91-9.1H2V9h3.425l3.21-5.504 1.728 1.008zM7 13v4h2v-4zm4 0v4h2v-4zm4 4h2v-4h-2z"
      />
    </svg>
  );
});

export default ProShoppingBasket2Fill;
