import * as React from "react";
import { IconProps } from "./types";

export const ProRestaurantLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 2c-1.412 0-2.671.863-3.53 1.938C15.594 5.03 15 6.496 15 8v7h4v7h2V2zm-1 2.314V13h-2V8c0-.996.405-2.03 1.03-2.813.31-.386.642-.676.97-.873M3 10V3h2v7h2V3h2v7h2V3h2v7a4 4 0 0 1-4 4v8H7v-8a4 4 0 0 1-4-4"
        />
      </svg>
    );
  },
);

export default ProRestaurantLine;
