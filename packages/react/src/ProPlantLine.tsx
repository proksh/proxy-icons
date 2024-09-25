import * as React from "react";
import { IconProps } from "./types";

export const ProPlantLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3V2h1c4.03 0 6.637.613 8.189 2.088.46.436.805.928 1.064 1.46a5 5 0 0 1 .35-.419C14.016 3.62 16.394 3 20 3h1v1c0 2.791-.434 4.947-2.01 6.317-1.36 1.182-3.372 1.593-5.99 1.67V13h5v8l-1 1H7l-1-1v-8h5v-2.01c-2.985-.068-5.228-.47-6.736-1.636C2.5 7.992 2 5.818 2 3m3.486 4.771c.969.748 2.62 1.144 5.491 1.217-.08-1.654-.396-2.72-1.166-3.45-.862-.82-2.507-1.42-5.784-1.523.117 2.015.606 3.096 1.46 3.756m12.191 1.037c.752-.654 1.193-1.749 1.299-3.788-2.807.112-4.187.7-4.912 1.476-.686.733-.97 1.818-1.044 3.488 2.464-.08 3.847-.472 4.657-1.176M8 20h8v-5H8z"
        />
      </svg>
    );
  },
);

export default ProPlantLine;
