import * as React from "react";
import { IconProps } from "./types";

export const ProStickerLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.073 3c1.824 0 3.293 0 4.45.155 1.2.162 2.21.507 3.012 1.31.803.802 1.148 1.813 1.31 3.013C21 8.634 21 10.103 21 11.927v1.487L13.414 21h-1.487c-1.824 0-3.293 0-4.45-.155-1.2-.162-2.21-.507-3.013-1.31-.802-.802-1.147-1.812-1.309-3.013C3 15.366 3 13.897 3 12.073v-.146c0-1.824 0-3.293.155-4.45.162-1.2.507-2.21 1.31-3.013.802-.802 1.813-1.147 3.013-1.309C8.634 3 10.103 3 11.927 3zM19 12c0-1.914-.002-3.249-.137-4.256-.132-.978-.373-1.496-.742-1.865-.369-.37-.887-.61-1.865-.741C15.249 5.002 13.914 5 12 5s-3.249.002-4.256.138c-.978.131-1.496.372-1.865.74-.37.37-.61.888-.741 1.866C5.002 8.751 5 10.086 5 12s.002 3.249.138 4.256c.131.978.372 1.496.74 1.865.37.37.888.61 1.866.742C8.751 18.998 10.086 19 12 19v-6l1-1zm-5 5.586L17.586 14H14z"
        />
      </svg>
    );
  },
);

export default ProStickerLine;
