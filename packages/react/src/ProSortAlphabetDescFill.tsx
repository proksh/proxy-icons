import * as React from "react";
import { IconProps } from "./types";

export const ProSortAlphabetDescFill = React.forwardRef<
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
        d="M6.064 2.647h1.872l3.094 8.21H8.893L8.38 9.5H5.62l-.512 1.357H2.97zM7 5.835 6.372 7.5h1.255zm4 9.415V13H3v2h5l-5 3.75V21h8v-2H6zm2.793-7.957 3.5-3.5h1.414l3.5 3.5L21.5 9H19v11h-2V9h-2.5z"
      />
    </svg>
  );
});

export default ProSortAlphabetDescFill;
