import * as React from "react";
import { IconProps } from "./types";

export const ProAncientPavilionLine = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M2.07 9.199A3.5 3.5 0 0 0 5 11.964V19H3v2h18v-2h-2v-7.035a3.5 3.5 0 0 0 2.93-2.766l.242-1.193L20.955 8c-2.174-.01-4.187-1.004-5.672-2.32-.739-.655-1.324-1.37-1.717-2.04C13.162 2.951 13 2.38 13 2h-2c0 .381-.162.952-.565 1.64-.394.67-.979 1.385-1.718 2.04C7.232 6.996 5.22 7.99 3.045 8l-1.217.006zm2.731.628c2.056-.396 3.868-1.432 5.243-2.65A11 11 0 0 0 12 4.913a11 11 0 0 0 1.957 2.264c1.375 1.218 3.186 2.254 5.242 2.65-.209.11-.447.173-.699.173h-13c-.252 0-.49-.062-.699-.173M17 19H7v-7h10z"
      />
    </svg>
  );
});

export default ProAncientPavilionLine;
