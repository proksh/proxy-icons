import * as React from "react";
import { IconProps } from "./types";

export const ProBaiduFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.926 12.497c2.063-.444 1.782-2.909 1.72-3.448-.1-.83-1.078-2.282-2.404-2.167-1.67.15-1.914 2.561-1.914 2.561-.226 1.115.54 3.497 2.598 3.053m2.191 4.288c-.06.173-.195.616-.079 1.002.23.866.982.905.982.905h1.08v-2.64H8.944c-.52.154-.77.559-.827.733m1.638-8.422c1.14 0 2.06-1.312 2.06-2.933s-.92-2.93-2.06-2.93c-1.138 0-2.06 1.31-2.06 2.93s.923 2.933 2.06 2.933m4.907.193c1.523.198 2.502-1.427 2.697-2.659.198-1.23-.784-2.658-1.862-2.904-1.08-.248-2.43 1.483-2.552 2.61-.147 1.38.197 2.758 1.717 2.953m0 3.448c-1.865-2.905-4.513-1.723-5.399-.245-.882 1.477-2.256 2.41-2.452 2.658-.198.244-2.846 1.673-2.258 4.284.588 2.609 2.653 2.56 2.653 2.56s1.521.15 3.286-.246c1.766-.391 3.286.098 3.286.098s4.124 1.38 5.253-1.278c1.127-2.66-.638-4.038-.638-4.038s-2.356-1.823-3.731-3.793m-6.007 7.75c-1.158-.231-1.62-1.021-1.677-1.156-.057-.137-.386-.772-.212-1.853.5-1.619 1.927-1.735 1.927-1.735h1.427v-1.755l1.216.02v6.479zm4.59-.019c-1.196-.308-1.252-1.158-1.252-1.158v-3.412l1.252-.02v3.066c.076.328.482.387.482.387H15v-3.433h1.331v4.57zm7.453-9.11c0-.59-.49-2.364-2.305-2.364-1.818 0-2.061 1.675-2.061 2.859 0 1.13.095 2.707 2.354 2.657s2.012-2.56 2.012-3.152"
        />
      </svg>
    );
  },
);

export default ProBaiduFill;