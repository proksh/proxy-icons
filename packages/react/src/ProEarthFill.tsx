import * as React from "react";
import { IconProps } from "./types";

export const ProEarthFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m8 10.018c-.322.032-.702.096-.853.247-.121.121-.187.354-.248.57-.072.256-.138.488-.281.488-.133 0-.331-.463-.53-.926-.198-.463-.397-.926-.53-.926a.9.9 0 0 0-.264.058c-.176.06-.353.118-.53-.058l-.529-.53s.53 1.059.53 1.324c0 .264-.794 1.058-1.06.794-.264-.265-.793-1.853-.793-1.853s0 2.117.264 2.382c.143.143.34.155.504.165.14.008.254.015.29.1.075.178-.185.407-.427.62-.188.166-.366.323-.366.439v.794c0 .265-1.324 1.588-1.589 1.853s-.794 0-1.059-.265S12 16.5 12 16.235c0-.132.066-.264.132-.397.066-.132.133-.264.133-.397 0-.264-.794-1.588-1.06-1.588-.132 0-.33.066-.528.132-.2.067-.398.133-.53.133-.265 0-1.323-.795-1.323-1.06v-1.587c0-.265 2.647-1.324 2.911-1.324.133 0 .265.132.397.265.133.132.265.264.397.264h1.853c.265 0 .265-.529 0-.529-.264 0-.53 0-.53-.265 0-.112.192-.272.391-.44.27-.226.556-.466.404-.618-.162-.163-.525.074-.841.28-.2.13-.38.249-.482.249-.133 0-.331-.132-.53-.265-.198-.132-.397-.264-.53-.264-.132 0-.529.264-.926.529s-.794.53-.926.53c-.265 0-.53-.265-.53-.53s.53-1.324.795-1.324c.264 0 1.852 0 2.117-.264.265-.265.265-1.06 0-1.06-.093 0-.25.066-.428.14-.329.135-.724.297-.895.126-.186-.186 1.058-1.324 1.323-1.324h1.588c.161 0 .842-.42 1.33-.72l.013-.009A8 8 0 0 1 20 12zM6.851 18.123a8 8 0 0 1-2.657-4.362c.415.168 1.015.448 1.188.621.133.133.199.397.265.662s.132.53.265.662c.098.098.307.16.53.226.376.112.793.236.793.568 0 .324-.222 1.111-.384 1.623M4.04 11.2a8 8 0 0 1 2.855-5.36c.23.245.605.675.605.866 0 .265-.794 1.853-1.059 1.853-.132 0-.198-.265-.265-.53-.066-.264-.132-.529-.264-.529-.265 0-.794.53-.794.794 0 .132.132.53.264.927.133.397.265.794.265.926 0 .165-.98.725-1.607 1.053"
        />
      </svg>
    );
  },
);

export default ProEarthFill;
