import * as React from "react";
import { IconProps } from "./types";

export const ProPenNibLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m15.536 2.808 5.656 5.656 2.122-.707-7.071-7.07zM7.57 4.693l6.584-.438 5.592 5.591-.44 6.584-.822.098h-.004l-.016.003-.068.009q-.091.011-.273.038a36 36 0 0 0-4.43.978c-2.7.784-5.767 2.053-7.703 3.99l-1.415-1.414c2.306-2.306 5.78-3.689 8.56-4.496a38 38 0 0 1 4.285-.972l.27-4.046-4.308-4.308-4.046.27q-.05.299-.12.685c-.17.92-.443 2.19-.852 3.6-.807 2.78-2.19 6.254-4.496 8.56L2.454 18.01c1.937-1.936 3.206-5.003 3.99-7.703a36 36 0 0 0 .978-4.43l.038-.273.01-.068.001-.016v-.003z"
        />
        <path
          fill={color}
          d="M12.708 11.293a2 2 0 1 1-2.829 2.828 2 2 0 0 1 2.829-2.828"
        />
      </svg>
    );
  },
);

export default ProPenNibLine;
