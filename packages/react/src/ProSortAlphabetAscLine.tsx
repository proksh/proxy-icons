import * as React from "react";
import { IconProps } from "./types";

export const ProSortAlphabetAscLine = React.forwardRef<
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
        d="M6.064 2.647h1.872l3.094 8.21H8.893L8.38 9.5H5.62l-.512 1.357H2.97zM6.372 7.5h1.255L7 5.835zM11 15.25V13H3v2h5l-5 3.75V21h8v-2H6zm9.793.043L19 17.086V4h-2v13.086l-1.793-1.793-1.414 1.414L18 20.914l4.207-4.207z"
      />
    </svg>
  );
});

export default ProSortAlphabetAscLine;
