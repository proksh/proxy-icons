import * as React from "react";
import { IconProps } from "./types";

export const ProWechat2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.458 18.185C3.359 16.677 2 14.4 2 11.908 2 7.323 6.475 3.6 12 3.6s10 3.723 10 8.308c0 4.584-4.475 8.308-10 8.308a11.4 11.4 0 0 1-3.272-.462c-.092-.03-.216-.03-.308-.03-.185 0-.37.06-.525.153l-2.191 1.262c-.062.03-.124.061-.186.061a.34.34 0 0 1-.339-.338c0-.093.03-.154.062-.246.03-.031.308-1.047.463-1.662 0-.062.03-.154.03-.215q0-.37-.277-.554m3.21-7.673c.717 0 1.285-.569 1.285-1.286S9.385 7.94 8.668 7.94s-1.285.568-1.285 1.286c0 .717.567 1.285 1.285 1.285m6.666 0c.718 0 1.285-.569 1.285-1.286s-.567-1.286-1.285-1.286c-.717 0-1.285.568-1.285 1.286 0 .717.568 1.285 1.285 1.285"
        />
      </svg>
    );
  },
);

export default ProWechat2Fill;
