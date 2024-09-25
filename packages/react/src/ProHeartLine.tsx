import * as React from "react";
import { IconProps } from "./types";

export const ProHeartLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.072 6.243a4 4 0 0 0-5.657 0L12 7.658l-1.415-1.415a4 4 0 0 0-5.657 5.656l7.071 7.072 7.073-7.071a4 4 0 0 0 0-5.657m-7.07-1.415a6 6 0 0 1 8.484 8.486L12 21.799l-8.485-8.485A6 6 0 1 1 12 4.828v.002z"
        />
      </svg>
    );
  },
);

export default ProHeartLine;
