import * as React from "react";
import { IconProps } from "./types";

export const ProMoonClearLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m14.726 1-.14.65a2.52 2.52 0 0 1-1.935 1.936l-.651.14v.548l.65.14a2.52 2.52 0 0 1 1.936 1.935l.14.651h.548l.14-.65a2.52 2.52 0 0 1 1.935-1.936l.651-.14v-.548l-.65-.14a2.52 2.52 0 0 1-1.936-1.935L15.274 1zm5 5-.14.65a2.52 2.52 0 0 1-1.935 1.936l-.651.14v.548l.65.14a2.52 2.52 0 0 1 1.936 1.935l.14.651h.548l.14-.65a2.52 2.52 0 0 1 1.935-1.936l.651-.14v-.548l-.65-.14a2.52 2.52 0 0 1-1.936-1.935L20.274 6zM9.102 3.473a9 9 0 1 0 11.421 11.421l-1.269-1.268a7 7 0 0 1-2.254.37 7 7 0 0 1-6.63-9.254zM5 11.996c0-2.392 1.2-4.505 3.032-5.768Q8 6.608 8 6.996a9 9 0 0 0 9.768 8.968A7 7 0 0 1 5 11.996"
        />
      </svg>
    );
  },
);

export default ProMoonClearLine;
