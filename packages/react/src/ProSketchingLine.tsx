import * as React from "react";
import { IconProps } from "./types";

export const ProSketchingLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.488 8.462c-1.9 2.538-3.876 5.795-5.114 8.023l-1.748-.97C2.888 13.242 4.913 9.9 6.887 7.262c.982-1.31 1.987-2.497 2.907-3.286.457-.391.947-.734 1.45-.925.51-.195 1.163-.274 1.77.09.71.426.934 1.146.95 1.78.017.609-.144 1.28-.359 1.925-.429 1.287-1.204 2.838-1.935 4.3l-.025.05c-.762 1.523-1.474 2.952-1.852 4.088-.192.573-.265.98-.258 1.239a1 1 0 0 0 .014.137c.03.012.06.012.12-.006.126-.039.332-.153.624-.415.564-.505 1.167-1.292 1.865-2.204l.111-.144c.703-.917 1.507-1.953 2.354-2.65.845-.693 2.035-1.281 3.324-.636.574.286.874.788.976 1.315.093.477.028.977-.074 1.414-.202.877-.653 1.906-1.06 2.821l-.08.181c-.4.896-.753 1.69-.935 2.328a2.7 2.7 0 0 0-.109.542c.237.062.577-.017 1.087-.497.599-.565 1.097-1.42 1.3-2.026l1.897.632c-.298.893-.966 2.039-1.825 2.85-.83.78-2.208 1.55-3.638.692-.57-.342-.776-.904-.815-1.39-.036-.453.06-.93.18-1.352.223-.782.634-1.703 1.011-2.55l.1-.222c.426-.96.788-1.806.939-2.46.06-.263.071-.43.066-.525-.21-.068-.517-.028-1.074.43-.637.522-1.302 1.361-2.037 2.32l-.155.202c-.65.85-1.363 1.782-2.072 2.418-.388.347-.85.678-1.378.839a2.14 2.14 0 0 1-1.765-.21c-.71-.426-.933-1.146-.95-1.78-.017-.61.144-1.28.36-1.925.428-1.287 1.203-2.838 1.935-4.3l.025-.05c.761-1.523 1.473-2.952 1.852-4.088.19-.573.264-.98.257-1.239q0-.033-.003-.058l-.008.003c-.19.073-.478.248-.857.574-.752.645-1.653 1.69-2.609 2.967m3.459-3.639q-.008-.012-.006-.013zM9.56 16.69l-.007-.013q.008.012.007.013"
        />
      </svg>
    );
  },
);

export default ProSketchingLine;
