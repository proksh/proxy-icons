import * as React from "react";
import { IconProps } from "./types";

export const ProSafariFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="m16.701 6.8-6.114 3.786L6.802 16.7l-.104-.104-1.415 1.414.708.707 1.414-1.414L7.3 17.2l6.114-3.785L17.2 7.3l.104.104L18.72 5.99l-.708-.708-1.414 1.415zm-4.7 15.2c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m-.5-19v2h1V3zm0 16v2h1v-2zM8.095 3.876l.765 1.848.924-.383-.765-1.847zm6.123 14.783.765 1.847.924-.382-.765-1.848zm.765-15.165-.765 1.847.924.383.765-1.848zM8.86 18.276l-.765 1.848.924.382.765-1.848zM21.001 11.5h-2v1h2zm-16 0h-2v1h2zm15.458 3.616-1.835-.795-.397.918 1.835.794zM5.775 8.76 3.94 7.967l-.397.918 1.835.794zm14.35-.667-1.848.765.383.924 1.847-.765zM5.342 14.217l-1.847.765.382.924 1.848-.765zM18.72 18.01l-1.415-1.414-.707.707 1.414 1.415zM7.404 6.697 5.99 5.282l-.708.708 1.415 1.414zm3.908 4.615 3.611-2.235-2.235 3.61z"
        />
      </svg>
    );
  },
);

export default ProSafariFill;
