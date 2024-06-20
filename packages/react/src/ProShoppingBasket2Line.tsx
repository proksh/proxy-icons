import * as React from "react";
import { IconProps } from "./types";

export const ProShoppingBasket2Line = React.forwardRef<
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
      <path fill={color} d="M7 13v4h2v-4zm4 4v-4h2v4zm4-4v4h2v-4z" />
      <path
        fill={color}
        d="M16.259 9H7.74l2.622-4.496-1.727-1.008L5.426 9H2v2h1.095l.91 9.1L5 21h14l.995-.9.91-9.1H22V9h-3.426l-3.21-5.504-1.728 1.008zM5.105 11h13.79l-.8 8H5.905z"
      />
    </svg>
  );
});

export default ProShoppingBasket2Line;
