import * as React from "react";
import { IconProps } from "./types";

export const ProDoubanFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.314 19.138h4.065a.62.62 0 0 1 .621.62v.621a.62.62 0 0 1-.62.621H3.62a.62.62 0 0 1-.62-.62v-.621a.62.62 0 0 1 .62-.621h3.754l-.96-3.104h2.19a.62.62 0 0 1 .59.425l.892 2.679H13.6l1.225-4.035H5.172a.62.62 0 0 1-.62-.62V7.345a.62.62 0 0 1 .62-.62h13.656a.62.62 0 0 1 .62.62v7.138a.62.62 0 0 1-.62.62h-1.289zM3.931 3h16.138a.62.62 0 0 1 .62.62v.621a.62.62 0 0 1-.62.621H3.931a.62.62 0 0 1-.62-.62V3.62A.62.62 0 0 1 3.93 3m3.26 5.586a.155.155 0 0 0-.156.155v4.035c0 .086.07.155.156.155h9.62c.086 0 .155-.07.155-.155V8.74a.155.155 0 0 0-.155-.155z"
        />
      </svg>
    );
  },
);

export default ProDoubanFill;
